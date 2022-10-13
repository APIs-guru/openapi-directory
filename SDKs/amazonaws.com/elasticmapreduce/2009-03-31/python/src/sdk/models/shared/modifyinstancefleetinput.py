from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from . import instancefleetmodifyconfig


@dataclass_json
@dataclass
class ModifyInstanceFleetInput:
    cluster_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ClusterId' }})
    instance_fleet: instancefleetmodifyconfig.InstanceFleetModifyConfig = field(default=None, metadata={'dataclasses_json': { 'field_name': 'InstanceFleet' }})
    
