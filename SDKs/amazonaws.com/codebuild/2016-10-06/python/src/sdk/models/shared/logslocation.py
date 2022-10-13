from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import cloudwatchlogsconfig
from . import s3logsconfig


@dataclass_json
@dataclass
class LogsLocation:
    cloud_watch_logs: Optional[cloudwatchlogsconfig.CloudWatchLogsConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cloudWatchLogs' }})
    cloud_watch_logs_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cloudWatchLogsArn' }})
    deep_link: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deepLink' }})
    group_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'groupName' }})
    s3_deep_link: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 's3DeepLink' }})
    s3_logs: Optional[s3logsconfig.S3LogsConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 's3Logs' }})
    s3_logs_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 's3LogsArn' }})
    stream_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'streamName' }})
    
