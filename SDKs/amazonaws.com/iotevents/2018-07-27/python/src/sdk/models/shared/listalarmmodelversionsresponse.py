from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import alarmmodelversionsummary


@dataclass_json
@dataclass
class ListAlarmModelVersionsResponse:
    alarm_model_version_summaries: Optional[List[alarmmodelversionsummary.AlarmModelVersionSummary]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'alarmModelVersionSummaries' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextToken' }})
    
