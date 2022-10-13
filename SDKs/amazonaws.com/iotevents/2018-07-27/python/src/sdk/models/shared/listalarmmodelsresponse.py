from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import alarmmodelsummary


@dataclass_json
@dataclass
class ListAlarmModelsResponse:
    alarm_model_summaries: Optional[List[alarmmodelsummary.AlarmModelSummary]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'alarmModelSummaries' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextToken' }})
    
