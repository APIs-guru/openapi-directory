from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DescribeGameSessionQueuesOutput:
    r"""DescribeGameSessionQueuesOutput
    Represents the returned data in response to a request operation.
    """
    
    game_session_queues: Optional[List[GameSessionQueue]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('GameSessionQueues') }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    
