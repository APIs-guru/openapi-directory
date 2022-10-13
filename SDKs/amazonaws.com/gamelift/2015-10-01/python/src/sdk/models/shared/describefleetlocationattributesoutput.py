from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import locationattributes


@dataclass_json
@dataclass
class DescribeFleetLocationAttributesOutput:
    fleet_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FleetArn' }})
    fleet_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FleetId' }})
    location_attributes: Optional[List[locationattributes.LocationAttributes]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LocationAttributes' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    
