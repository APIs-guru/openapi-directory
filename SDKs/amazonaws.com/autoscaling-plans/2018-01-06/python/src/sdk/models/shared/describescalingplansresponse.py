from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import scalingplan


@dataclass_json
@dataclass
class DescribeScalingPlansResponse:
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    scaling_plans: Optional[List[scalingplan.ScalingPlan]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ScalingPlans' }})
    
