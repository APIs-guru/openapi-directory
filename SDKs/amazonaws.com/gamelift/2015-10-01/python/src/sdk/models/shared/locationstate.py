from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class LocationState:
    r"""LocationState
    <p>A fleet location and its life-cycle state. A location state object might be used to describe a fleet's remote location or home Region. Life-cycle state tracks the progress of launching the first instance in a new location and preparing it for game hosting, and then removing all instances and deleting the location from the fleet.</p> <p> <b>Related actions</b> </p> <p> <a>CreateFleet</a> | <a>CreateFleetLocations</a> | <a>DeleteFleetLocations</a> </p>
    """
    
    location: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Location') }})
    status: Optional[FleetStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Status') }})
    
