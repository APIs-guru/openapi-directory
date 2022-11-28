from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class JobBookmarksEncryption:
    r"""JobBookmarksEncryption
    Specifies how job bookmark data should be encrypted.
    """
    
    job_bookmarks_encryption_mode: Optional[JobBookmarksEncryptionModeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('JobBookmarksEncryptionMode') }})
    kms_key_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('KmsKeyArn') }})
    
