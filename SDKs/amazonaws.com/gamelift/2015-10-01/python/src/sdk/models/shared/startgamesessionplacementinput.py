from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class StartGameSessionPlacementInput:
    r"""StartGameSessionPlacementInput
    Represents the input for a request operation.
    """
    
    game_session_queue_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('GameSessionQueueName') }})
    maximum_player_session_count: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('MaximumPlayerSessionCount') }})
    placement_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('PlacementId') }})
    desired_player_sessions: Optional[List[DesiredPlayerSession]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DesiredPlayerSessions') }})
    game_properties: Optional[List[GameProperty]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('GameProperties') }})
    game_session_data: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('GameSessionData') }})
    game_session_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('GameSessionName') }})
    player_latencies: Optional[List[PlayerLatency]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PlayerLatencies') }})
    
