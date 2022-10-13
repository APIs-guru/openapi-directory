from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import alarmsummary


@dataclass_json
@dataclass
class ListAlarmsResponse:
    alarm_summaries: Optional[List[alarmsummary.AlarmSummary]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'alarmSummaries' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextToken' }})
    
