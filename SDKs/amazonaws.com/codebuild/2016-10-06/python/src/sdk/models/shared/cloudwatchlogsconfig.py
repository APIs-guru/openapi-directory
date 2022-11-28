from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CloudWatchLogsConfig:
    r"""CloudWatchLogsConfig
     Information about CloudWatch Logs for a build project. 
    """
    
    status: LogsConfigStatusTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    group_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('groupName') }})
    stream_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('streamName') }})
    
