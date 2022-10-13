from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import alarmaction


@dataclass_json
@dataclass
class AlarmEventActions:
    alarm_actions: Optional[List[alarmaction.AlarmAction]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'alarmActions' }})
    
