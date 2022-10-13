from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Notification:
    assessment_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'assessmentId' }})
    assessment_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'assessmentName' }})
    control_set_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'controlSetId' }})
    control_set_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'controlSetName' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    event_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'eventTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    source: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'source' }})
    
