from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import mluserdataencryptionmodestring_enum


@dataclass_json
@dataclass
class MlUserDataEncryption:
    kms_key_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'KmsKeyId' }})
    ml_user_data_encryption_mode: mluserdataencryptionmodestring_enum.MlUserDataEncryptionModeStringEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MlUserDataEncryptionMode' }})
    
