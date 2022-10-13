from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import alarm


@dataclass_json
@dataclass
class DescribeAlarmResponse:
    alarm: Optional[alarm.Alarm] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'alarm' }})
    
