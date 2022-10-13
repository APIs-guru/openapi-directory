from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import replaystate_enum


@dataclass_json
@dataclass
class CancelReplayResponse:
    replay_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ReplayArn' }})
    state: Optional[replaystate_enum.ReplayStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'State' }})
    state_reason: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StateReason' }})
    
