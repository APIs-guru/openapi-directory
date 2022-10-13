from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import fleetcapacity


@dataclass_json
@dataclass
class DescribeFleetCapacityOutput:
    fleet_capacity: Optional[List[fleetcapacity.FleetCapacity]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FleetCapacity' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    
