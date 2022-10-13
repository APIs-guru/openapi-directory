from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import gameproperty


@dataclass_json
@dataclass
class CreateGameSessionInput:
    alias_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AliasId' }})
    creator_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreatorId' }})
    fleet_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FleetId' }})
    game_properties: Optional[List[gameproperty.GameProperty]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'GameProperties' }})
    game_session_data: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'GameSessionData' }})
    game_session_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'GameSessionId' }})
    idempotency_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IdempotencyToken' }})
    location: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Location' }})
    maximum_player_session_count: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MaximumPlayerSessionCount' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    
