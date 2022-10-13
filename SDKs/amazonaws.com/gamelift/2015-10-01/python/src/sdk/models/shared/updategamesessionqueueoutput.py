from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import gamesessionqueue


@dataclass_json
@dataclass
class UpdateGameSessionQueueOutput:
    game_session_queue: Optional[gamesessionqueue.GameSessionQueue] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'GameSessionQueue' }})
    
