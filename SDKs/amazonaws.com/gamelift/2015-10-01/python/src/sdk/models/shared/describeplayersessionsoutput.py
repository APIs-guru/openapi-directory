from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DescribePlayerSessionsOutput:
    r"""DescribePlayerSessionsOutput
    Represents the returned data in response to a request operation.
    """
    
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    player_sessions: Optional[List[PlayerSession]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PlayerSessions') }})
    
