from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import instancefleet


@dataclass_json
@dataclass
class ListInstanceFleetsOutput:
    instance_fleets: Optional[List[instancefleet.InstanceFleet]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'InstanceFleets' }})
    marker: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Marker' }})
    
