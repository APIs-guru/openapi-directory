from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class LogTargetConfiguration:
    r"""LogTargetConfiguration
    The target configuration.
    """
    
    log_level: Optional[LogLevelEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('logLevel') }})
    log_target: Optional[LogTarget] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('logTarget') }})
    
