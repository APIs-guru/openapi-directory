from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class StartMatchBackfillOutput:
    r"""StartMatchBackfillOutput
    Represents the returned data in response to a request operation.
    """
    
    matchmaking_ticket: Optional[MatchmakingTicket] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MatchmakingTicket') }})
    
