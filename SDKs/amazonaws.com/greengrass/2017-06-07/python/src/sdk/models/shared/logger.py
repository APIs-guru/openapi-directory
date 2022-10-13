from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import loggercomponent_enum
from . import loggerlevel_enum
from . import loggertype_enum


@dataclass_json
@dataclass
class Logger:
    component: loggercomponent_enum.LoggerComponentEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Component' }})
    id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Id' }})
    level: loggerlevel_enum.LoggerLevelEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Level' }})
    space: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Space' }})
    type: loggertype_enum.LoggerTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Type' }})
    
