from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CreateFleetLocationsInput:
    r"""CreateFleetLocationsInput
    Represents the input for a request operation.
    """
    
    fleet_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('FleetId') }})
    locations: List[LocationConfiguration] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Locations') }})
    
