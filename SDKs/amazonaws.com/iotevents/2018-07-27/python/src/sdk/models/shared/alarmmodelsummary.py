from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class AlarmModelSummary:
    alarm_model_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'alarmModelDescription' }})
    alarm_model_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'alarmModelName' }})
    creation_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'creationTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
