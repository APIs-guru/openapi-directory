from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import loglevel_enum


@dataclass_json
@dataclass
class GetV2LoggingOptionsResponse:
    default_log_level: Optional[loglevel_enum.LogLevelEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'defaultLogLevel' }})
    disable_all_logs: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'disableAllLogs' }})
    role_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'roleArn' }})
    
