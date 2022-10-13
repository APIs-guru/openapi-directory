from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import cloudwatchlogsconfig
from . import s3logsconfig


@dataclass_json
@dataclass
class LogsConfig:
    cloud_watch_logs: Optional[cloudwatchlogsconfig.CloudWatchLogsConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cloudWatchLogs' }})
    s3_logs: Optional[s3logsconfig.S3LogsConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 's3Logs' }})
    
