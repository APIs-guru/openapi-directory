from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class MlUserDataEncryption:
    r"""MlUserDataEncryption
    The encryption-at-rest settings of the transform that apply to accessing user data.
    """
    
    ml_user_data_encryption_mode: MlUserDataEncryptionModeStringEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('MlUserDataEncryptionMode') }})
    kms_key_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('KmsKeyId') }})
    
