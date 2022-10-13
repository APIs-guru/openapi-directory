from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import alarmmodelversionstatus_enum


@dataclass_json
@dataclass
class UpdateAlarmModelResponse:
    alarm_model_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'alarmModelArn' }})
    alarm_model_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'alarmModelVersion' }})
    creation_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'creationTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    last_update_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastUpdateTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    status: Optional[alarmmodelversionstatus_enum.AlarmModelVersionStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    
