from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import scalingstatustype_enum


@dataclass_json
@dataclass
class DescribeScalingPoliciesInput:
    fleet_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FleetId' }})
    limit: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Limit' }})
    location: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Location' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    status_filter: Optional[scalingstatustype_enum.ScalingStatusTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StatusFilter' }})
    
