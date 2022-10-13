from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import locationstate
from . import fleetaction_enum
from . import locationupdatestatus_enum


@dataclass_json
@dataclass
class LocationAttributes:
    location_state: Optional[locationstate.LocationState] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LocationState' }})
    stopped_actions: Optional[List[fleetaction_enum.FleetActionEnum]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StoppedActions' }})
    update_status: Optional[locationupdatestatus_enum.LocationUpdateStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'UpdateStatus' }})
    
