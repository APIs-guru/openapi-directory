from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import locationstate


@dataclass_json
@dataclass
class DeleteFleetLocationsOutput:
    fleet_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FleetArn' }})
    fleet_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FleetId' }})
    location_states: Optional[List[locationstate.LocationState]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LocationStates' }})
    
