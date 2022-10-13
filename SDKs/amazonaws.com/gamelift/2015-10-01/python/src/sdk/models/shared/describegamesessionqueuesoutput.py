from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import gamesessionqueue


@dataclass_json
@dataclass
class DescribeGameSessionQueuesOutput:
    game_session_queues: Optional[List[gamesessionqueue.GameSessionQueue]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'GameSessionQueues' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    
