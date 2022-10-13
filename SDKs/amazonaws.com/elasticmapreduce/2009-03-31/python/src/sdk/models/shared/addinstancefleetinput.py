from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from . import instancefleetconfig


@dataclass_json
@dataclass
class AddInstanceFleetInput:
    cluster_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ClusterId' }})
    instance_fleet: instancefleetconfig.InstanceFleetConfig = field(default=None, metadata={'dataclasses_json': { 'field_name': 'InstanceFleet' }})
    
