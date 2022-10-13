from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import replaystate_enum


@dataclass_json
@dataclass
class StartReplayResponse:
    replay_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ReplayArn' }})
    replay_start_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ReplayStartTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    state: Optional[replaystate_enum.ReplayStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'State' }})
    state_reason: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StateReason' }})
    
