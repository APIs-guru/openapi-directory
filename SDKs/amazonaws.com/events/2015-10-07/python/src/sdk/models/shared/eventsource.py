from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import eventsourcestate_enum


@dataclass_json
@dataclass
class EventSource:
    arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Arn' }})
    created_by: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreatedBy' }})
    creation_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreationTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    expiration_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ExpirationTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    state: Optional[eventsourcestate_enum.EventSourceStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'State' }})
    
