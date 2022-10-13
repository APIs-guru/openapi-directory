from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import replaydestination
from . import replaystate_enum


@dataclass_json
@dataclass
class DescribeReplayResponse:
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Description' }})
    destination: Optional[replaydestination.ReplayDestination] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Destination' }})
    event_end_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EventEndTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    event_last_replayed_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EventLastReplayedTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    event_source_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EventSourceArn' }})
    event_start_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EventStartTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    replay_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ReplayArn' }})
    replay_end_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ReplayEndTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    replay_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ReplayName' }})
    replay_start_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ReplayStartTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    state: Optional[replaystate_enum.ReplayStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'State' }})
    state_reason: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StateReason' }})
    
