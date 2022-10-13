from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class SetTimerAction:
    duration_expression: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'durationExpression' }})
    seconds: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'seconds' }})
    timer_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timerName' }})
    
