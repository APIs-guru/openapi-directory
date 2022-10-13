from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import desiredplayersession
from . import gameproperty
from . import playerlatency


@dataclass_json
@dataclass
class StartGameSessionPlacementInput:
    desired_player_sessions: Optional[List[desiredplayersession.DesiredPlayerSession]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DesiredPlayerSessions' }})
    game_properties: Optional[List[gameproperty.GameProperty]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'GameProperties' }})
    game_session_data: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'GameSessionData' }})
    game_session_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'GameSessionName' }})
    game_session_queue_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'GameSessionQueueName' }})
    maximum_player_session_count: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MaximumPlayerSessionCount' }})
    placement_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PlacementId' }})
    player_latencies: Optional[List[playerlatency.PlayerLatency]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PlayerLatencies' }})
    
