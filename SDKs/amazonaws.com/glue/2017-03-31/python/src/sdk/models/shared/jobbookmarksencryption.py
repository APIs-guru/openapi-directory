from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import jobbookmarksencryptionmode_enum


@dataclass_json
@dataclass
class JobBookmarksEncryption:
    job_bookmarks_encryption_mode: Optional[jobbookmarksencryptionmode_enum.JobBookmarksEncryptionModeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'JobBookmarksEncryptionMode' }})
    kms_key_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'KmsKeyArn' }})
    
