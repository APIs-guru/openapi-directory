from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ResetAlarmActionRequest:
    r"""ResetAlarmActionRequest
    Information needed to reset the alarm.
    """
    
    alarm_model_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('alarmModelName') }})
    request_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('requestId') }})
    key_value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('keyValue') }})
    note: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('note') }})
    
