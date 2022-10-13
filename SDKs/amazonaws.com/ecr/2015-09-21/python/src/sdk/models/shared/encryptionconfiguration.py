from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import encryptiontype_enum


@dataclass_json
@dataclass
class EncryptionConfiguration:
    encryption_type: encryptiontype_enum.EncryptionTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'encryptionType' }})
    kms_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kmsKey' }})
    
