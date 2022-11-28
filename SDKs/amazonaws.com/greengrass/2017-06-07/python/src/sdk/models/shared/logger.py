from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Logger:
    r"""Logger
    Information about a logger
    """
    
    component: LoggerComponentEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Component') }})
    id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Id') }})
    level: LoggerLevelEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Level') }})
    type: LoggerTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Type') }})
    space: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Space') }})
    
