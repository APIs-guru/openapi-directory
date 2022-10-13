from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import fleetcapacity


@dataclass_json
@dataclass
class DescribeFleetLocationCapacityOutput:
    fleet_capacity: Optional[fleetcapacity.FleetCapacity] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FleetCapacity' }})
    
