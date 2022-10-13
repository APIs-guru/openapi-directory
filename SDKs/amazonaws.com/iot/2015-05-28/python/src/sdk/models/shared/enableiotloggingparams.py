from dataclasses import dataclass, field
from typing import Enum
from dataclasses_json import dataclass_json
from . import loglevel_enum


@dataclass_json
@dataclass
class EnableIoTLoggingParams:
    log_level: loglevel_enum.LogLevelEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'logLevel' }})
    role_arn_for_logging: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'roleArnForLogging' }})
    
