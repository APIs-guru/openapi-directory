from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class InstanceFleetModifyConfig:
    instance_fleet_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'InstanceFleetId' }})
    target_on_demand_capacity: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TargetOnDemandCapacity' }})
    target_spot_capacity: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TargetSpotCapacity' }})
    
