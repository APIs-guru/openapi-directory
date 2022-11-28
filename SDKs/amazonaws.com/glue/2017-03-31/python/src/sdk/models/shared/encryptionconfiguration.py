from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class EncryptionConfiguration:
    r"""EncryptionConfiguration
    Specifies an encryption configuration.
    """
    
    cloud_watch_encryption: Optional[CloudWatchEncryption] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CloudWatchEncryption') }})
    job_bookmarks_encryption: Optional[JobBookmarksEncryption] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('JobBookmarksEncryption') }})
    s3_encryption: Optional[List[S3Encryption]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('S3Encryption') }})
    
