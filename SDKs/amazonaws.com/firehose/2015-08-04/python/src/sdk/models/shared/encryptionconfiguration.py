from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class EncryptionConfiguration:
    r"""EncryptionConfiguration
    Describes the encryption for a destination in Amazon S3.
    """
    
    kms_encryption_config: Optional[KmsEncryptionConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('KMSEncryptionConfig') }})
    no_encryption_config: Optional[NoEncryptionConfigEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NoEncryptionConfig') }})
    
