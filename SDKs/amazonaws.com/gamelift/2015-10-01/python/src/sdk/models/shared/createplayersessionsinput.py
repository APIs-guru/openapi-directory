from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class CreatePlayerSessionsInput:
    game_session_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'GameSessionId' }})
    player_data_map: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PlayerDataMap' }})
    player_ids: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PlayerIds' }})
    
