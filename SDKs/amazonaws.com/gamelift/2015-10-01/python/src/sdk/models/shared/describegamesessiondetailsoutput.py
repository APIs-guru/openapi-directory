from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import gamesessiondetail


@dataclass_json
@dataclass
class DescribeGameSessionDetailsOutput:
    game_session_details: Optional[List[gamesessiondetail.GameSessionDetail]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'GameSessionDetails' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    
