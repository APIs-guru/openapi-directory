from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class LogsLocation:
    r"""LogsLocation
    Information about build logs in CloudWatch Logs.
    """
    
    cloud_watch_logs: Optional[CloudWatchLogsConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cloudWatchLogs') }})
    cloud_watch_logs_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cloudWatchLogsArn') }})
    deep_link: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deepLink') }})
    group_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('groupName') }})
    s3_deep_link: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('s3DeepLink') }})
    s3_logs: Optional[S3LogsConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('s3Logs') }})
    s3_logs_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('s3LogsArn') }})
    stream_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('streamName') }})
    
