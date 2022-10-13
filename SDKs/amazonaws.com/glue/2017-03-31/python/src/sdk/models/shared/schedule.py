from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import schedulestate_enum


@dataclass_json
@dataclass
class Schedule:
    schedule_expression: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ScheduleExpression' }})
    state: Optional[schedulestate_enum.ScheduleStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'State' }})
    
