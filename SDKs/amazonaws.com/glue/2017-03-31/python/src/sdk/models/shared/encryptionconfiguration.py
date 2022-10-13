from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import cloudwatchencryption
from . import jobbookmarksencryption
from . import s3encryption


@dataclass_json
@dataclass
class EncryptionConfiguration:
    cloud_watch_encryption: Optional[cloudwatchencryption.CloudWatchEncryption] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CloudWatchEncryption' }})
    job_bookmarks_encryption: Optional[jobbookmarksencryption.JobBookmarksEncryption] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'JobBookmarksEncryption' }})
    s3_encryption: Optional[List[s3encryption.S3Encryption]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'S3Encryption' }})
    
