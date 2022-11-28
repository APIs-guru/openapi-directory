from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class StartMatchBackfillInput:
    r"""StartMatchBackfillInput
    Represents the input for a request operation.
    """
    
    configuration_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ConfigurationName') }})
    players: List[Player] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Players') }})
    game_session_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('GameSessionArn') }})
    ticket_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TicketId') }})
    
