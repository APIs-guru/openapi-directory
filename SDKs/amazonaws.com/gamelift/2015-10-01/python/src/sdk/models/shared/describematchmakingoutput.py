from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import matchmakingticket


@dataclass_json
@dataclass
class DescribeMatchmakingOutput:
    ticket_list: Optional[List[matchmakingticket.MatchmakingTicket]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TicketList' }})
    
