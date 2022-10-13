from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import fleetutilization


@dataclass_json
@dataclass
class DescribeFleetUtilizationOutput:
    fleet_utilization: Optional[List[fleetutilization.FleetUtilization]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FleetUtilization' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    
