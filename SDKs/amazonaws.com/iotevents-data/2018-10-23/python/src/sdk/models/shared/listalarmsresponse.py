from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListAlarmsResponse:
    alarm_summaries: Optional[List[AlarmSummary]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('alarmSummaries') }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextToken') }})
    
