from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import encryptionoption_enum


@dataclass_json
@dataclass
class KmsKeyDetails:
    encryption_option: Optional[encryptionoption_enum.EncryptionOptionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EncryptionOption' }})
    kms_key_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'KMSKeyId' }})
    
