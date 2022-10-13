from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import alarm


@dataclass_json
@dataclass
class AlarmConfiguration:
    alarms: Optional[List[alarm.Alarm]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'alarms' }})
    enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'enabled' }})
    ignore_poll_alarm_failure: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ignorePollAlarmFailure' }})
    
