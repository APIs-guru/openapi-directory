from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import resource


@dataclass_json
@dataclass
class Event:
    access_key_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AccessKeyId' }})
    cloud_trail_event: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CloudTrailEvent' }})
    event_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EventId' }})
    event_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EventName' }})
    event_source: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EventSource' }})
    event_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EventTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    read_only: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ReadOnly' }})
    resources: Optional[List[resource.Resource]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Resources' }})
    username: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Username' }})
    
