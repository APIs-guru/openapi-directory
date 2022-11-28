from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class LogConfig:
    r"""LogConfig
    The CloudWatch Logs configuration.
    """
    
    cloud_watch_logs_role_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('cloudWatchLogsRoleArn') }})
    field_log_level: FieldLogLevelEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('fieldLogLevel') }})
    exclude_verbose_content: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('excludeVerboseContent') }})
    
