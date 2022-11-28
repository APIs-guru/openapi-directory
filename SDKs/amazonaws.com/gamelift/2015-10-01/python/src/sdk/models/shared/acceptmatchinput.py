from dataclasses import dataclass, field
from typing import List
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class AcceptMatchInput:
    r"""AcceptMatchInput
    Represents the input for a request operation.
    """
    
    acceptance_type: AcceptanceTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('AcceptanceType') }})
    player_ids: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('PlayerIds') }})
    ticket_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('TicketId') }})
    
