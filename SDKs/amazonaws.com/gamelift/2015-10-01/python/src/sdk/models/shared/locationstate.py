from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import fleetstatus_enum


@dataclass_json
@dataclass
class LocationState:
    location: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Location' }})
    status: Optional[fleetstatus_enum.FleetStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Status' }})
    
