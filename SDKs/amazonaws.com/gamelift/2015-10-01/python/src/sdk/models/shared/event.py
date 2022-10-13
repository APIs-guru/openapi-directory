from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import eventcode_enum


@dataclass_json
@dataclass
class Event:
    event_code: Optional[eventcode_enum.EventCodeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EventCode' }})
    event_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EventId' }})
    event_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EventTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Message' }})
    pre_signed_log_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PreSignedLogUrl' }})
    resource_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ResourceId' }})
    
