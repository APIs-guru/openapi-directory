from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class StartFleetActionsInput:
    r"""StartFleetActionsInput
    Represents the input for a request operation.
    """
    
    actions: List[FleetActionEnum] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Actions') }})
    fleet_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('FleetId') }})
    location: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Location') }})
    
