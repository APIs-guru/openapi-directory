from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import player


@dataclass_json
@dataclass
class StartMatchBackfillInput:
    configuration_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ConfigurationName' }})
    game_session_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'GameSessionArn' }})
    players: List[player.Player] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Players' }})
    ticket_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TicketId' }})
    
