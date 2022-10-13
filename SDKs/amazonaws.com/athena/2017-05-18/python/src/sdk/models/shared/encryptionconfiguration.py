from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import encryptionoption_enum


@dataclass_json
@dataclass
class EncryptionConfiguration:
    encryption_option: encryptionoption_enum.EncryptionOptionEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EncryptionOption' }})
    kms_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'KmsKey' }})
    
