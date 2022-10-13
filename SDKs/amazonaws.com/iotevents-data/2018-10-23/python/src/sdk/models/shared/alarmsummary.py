from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import alarmstatename_enum


@dataclass_json
@dataclass
class AlarmSummary:
    alarm_model_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'alarmModelName' }})
    alarm_model_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'alarmModelVersion' }})
    creation_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'creationTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    key_value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'keyValue' }})
    last_update_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastUpdateTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    state_name: Optional[alarmstatename_enum.AlarmStateNameEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'stateName' }})
    
