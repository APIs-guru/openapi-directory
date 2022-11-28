from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class LogsConfig:
    r"""LogsConfig
     Information about logs for a build project. These can be logs in CloudWatch Logs, built in a specified S3 bucket, or both. 
    """
    
    cloud_watch_logs: Optional[CloudWatchLogsConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cloudWatchLogs') }})
    s3_logs: Optional[S3LogsConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('s3Logs') }})
    
