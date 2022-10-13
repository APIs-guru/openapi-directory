from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import scalingplanresource


@dataclass_json
@dataclass
class DescribeScalingPlanResourcesResponse:
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    scaling_plan_resources: Optional[List[scalingplanresource.ScalingPlanResource]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ScalingPlanResources' }})
    
