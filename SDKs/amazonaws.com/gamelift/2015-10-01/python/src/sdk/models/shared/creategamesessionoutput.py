from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import gamesession


@dataclass_json
@dataclass
class CreateGameSessionOutput:
    game_session: Optional[gamesession.GameSession] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'GameSession' }})
    
