from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from . import replaydestination


@dataclass_json
@dataclass
class StartReplayRequest:
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Description' }})
    destination: replaydestination.ReplayDestination = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Destination' }})
    event_end_time: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EventEndTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    event_source_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EventSourceArn' }})
    event_start_time: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EventStartTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    replay_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ReplayName' }})
    
