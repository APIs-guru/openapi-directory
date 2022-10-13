from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import playersession


@dataclass_json
@dataclass
class DescribePlayerSessionsOutput:
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    player_sessions: Optional[List[playersession.PlayerSession]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PlayerSessions' }})
    
