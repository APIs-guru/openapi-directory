from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import matchmakingticket


@dataclass_json
@dataclass
class StartMatchBackfillOutput:
    matchmaking_ticket: Optional[matchmakingticket.MatchmakingTicket] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MatchmakingTicket' }})
    
