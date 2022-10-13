from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class CreatePlayerSessionInput:
    game_session_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'GameSessionId' }})
    player_data: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PlayerData' }})
    player_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PlayerId' }})
    
