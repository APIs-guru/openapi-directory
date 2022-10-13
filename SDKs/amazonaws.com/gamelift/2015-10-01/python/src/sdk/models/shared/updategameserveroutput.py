from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import gameserver


@dataclass_json
@dataclass
class UpdateGameServerOutput:
    game_server: Optional[gameserver.GameServer] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'GameServer' }})
    
