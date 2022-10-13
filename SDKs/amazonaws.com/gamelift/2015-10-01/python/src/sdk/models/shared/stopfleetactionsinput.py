from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import fleetaction_enum


@dataclass_json
@dataclass
class StopFleetActionsInput:
    actions: List[fleetaction_enum.FleetActionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Actions' }})
    fleet_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FleetId' }})
    location: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Location' }})
    
