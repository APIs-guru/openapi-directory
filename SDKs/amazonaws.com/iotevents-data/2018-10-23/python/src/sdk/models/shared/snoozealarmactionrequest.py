from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class SnoozeAlarmActionRequest:
    alarm_model_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'alarmModelName' }})
    key_value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'keyValue' }})
    note: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'note' }})
    request_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'requestId' }})
    snooze_duration: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'snoozeDuration' }})
    
