from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DeleteFleetLocationsOutput:
    r"""DeleteFleetLocationsOutput
    Represents the returned data in response to a request operation.
    """
    
    fleet_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FleetArn') }})
    fleet_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FleetId') }})
    location_states: Optional[List[LocationState]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LocationStates') }})
    
