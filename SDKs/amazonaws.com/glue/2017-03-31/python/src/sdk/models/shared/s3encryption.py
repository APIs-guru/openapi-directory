from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class S3Encryption:
    r"""S3Encryption
    Specifies how Amazon Simple Storage Service (Amazon S3) data should be encrypted.
    """
    
    kms_key_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('KmsKeyArn') }})
    s3_encryption_mode: Optional[S3EncryptionModeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('S3EncryptionMode') }})
    
