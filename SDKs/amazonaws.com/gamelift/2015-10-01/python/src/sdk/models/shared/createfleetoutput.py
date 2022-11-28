from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CreateFleetOutput:
    r"""CreateFleetOutput
    Represents the returned data in response to a request operation.
    """
    
    fleet_attributes: Optional[FleetAttributes] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FleetAttributes') }})
    location_states: Optional[List[LocationState]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LocationStates') }})
    
