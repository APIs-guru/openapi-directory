from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import playersession


@dataclass_json
@dataclass
class CreatePlayerSessionOutput:
    player_session: Optional[playersession.PlayerSession] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PlayerSession' }})
    
