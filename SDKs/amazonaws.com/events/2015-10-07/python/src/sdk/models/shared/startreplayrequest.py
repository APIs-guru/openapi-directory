from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class StartReplayRequest:
    destination: ReplayDestination = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Destination') }})
    event_end_time: datetime = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('EventEndTime'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    event_source_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('EventSourceArn') }})
    event_start_time: datetime = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('EventStartTime'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    replay_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ReplayName') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Description') }})
    
