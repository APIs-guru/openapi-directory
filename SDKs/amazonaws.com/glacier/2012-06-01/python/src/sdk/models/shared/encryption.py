from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import encryptiontype_enum


@dataclass_json
@dataclass
class Encryption:
    encryption_type: Optional[encryptiontype_enum.EncryptionTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EncryptionType' }})
    kms_context: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'KMSContext' }})
    kms_key_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'KMSKeyId' }})
    
