from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import loglevel_enum
from . import logtarget


@dataclass_json
@dataclass
class LogTargetConfiguration:
    log_level: Optional[loglevel_enum.LogLevelEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'logLevel' }})
    log_target: Optional[logtarget.LogTarget] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'logTarget' }})
    
