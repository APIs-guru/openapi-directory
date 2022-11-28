from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CloudWatchEncryption:
    r"""CloudWatchEncryption
    Specifies how Amazon CloudWatch data should be encrypted.
    """
    
    cloud_watch_encryption_mode: Optional[CloudWatchEncryptionModeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CloudWatchEncryptionMode') }})
    kms_key_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('KmsKeyArn') }})
    
