from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ExecuteCommandLogConfiguration:
    r"""ExecuteCommandLogConfiguration
    The log configuration for the results of the execute command actions. The logs can be sent to CloudWatch Logs or an Amazon S3 bucket.
    """
    
    cloud_watch_encryption_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cloudWatchEncryptionEnabled') }})
    cloud_watch_log_group_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cloudWatchLogGroupName') }})
    s3_bucket_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('s3BucketName') }})
    s3_encryption_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('s3EncryptionEnabled') }})
    s3_key_prefix: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('s3KeyPrefix') }})
    
