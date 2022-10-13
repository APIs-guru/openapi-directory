from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import fleetutilization


@dataclass_json
@dataclass
class DescribeFleetLocationUtilizationOutput:
    fleet_utilization: Optional[fleetutilization.FleetUtilization] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FleetUtilization' }})
    
