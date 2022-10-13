from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import fleetattributes


@dataclass_json
@dataclass
class DescribeFleetAttributesOutput:
    fleet_attributes: Optional[List[fleetattributes.FleetAttributes]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FleetAttributes' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    
