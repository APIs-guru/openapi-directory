from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class DescribeScalingPlanResourcesRequest:
    max_results: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MaxResults' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    scaling_plan_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ScalingPlanName' }})
    scaling_plan_version: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ScalingPlanVersion' }})
    
