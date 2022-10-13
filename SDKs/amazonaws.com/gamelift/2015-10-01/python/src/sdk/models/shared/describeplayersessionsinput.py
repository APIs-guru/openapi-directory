from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class DescribePlayerSessionsInput:
    game_session_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'GameSessionId' }})
    limit: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Limit' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    player_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PlayerId' }})
    player_session_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PlayerSessionId' }})
    player_session_status_filter: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PlayerSessionStatusFilter' }})
    
