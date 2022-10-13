from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import fieldloglevel_enum


@dataclass_json
@dataclass
class LogConfig:
    cloud_watch_logs_role_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cloudWatchLogsRoleArn' }})
    exclude_verbose_content: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'excludeVerboseContent' }})
    field_log_level: fieldloglevel_enum.FieldLogLevelEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fieldLogLevel' }})
    
