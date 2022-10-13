from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from . import alarmstate


@dataclass_json
@dataclass
class Alarm:
    alarm_model_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'alarmModelName' }})
    alarm_model_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'alarmModelVersion' }})
    alarm_state: Optional[alarmstate.AlarmState] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'alarmState' }})
    creation_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'creationTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    key_value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'keyValue' }})
    last_update_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastUpdateTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    severity: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'severity' }})
    
