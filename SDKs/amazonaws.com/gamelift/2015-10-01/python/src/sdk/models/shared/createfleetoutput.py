from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import fleetattributes
from . import locationstate


@dataclass_json
@dataclass
class CreateFleetOutput:
    fleet_attributes: Optional[fleetattributes.FleetAttributes] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FleetAttributes' }})
    location_states: Optional[List[locationstate.LocationState]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LocationStates' }})
    
