from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum
from dataclasses_json import dataclass_json
from . import inspectorevent_enum


@dataclass_json
@dataclass
class EventSubscription:
    event: inspectorevent_enum.InspectorEventEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'event' }})
    subscribed_at: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'subscribedAt', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
