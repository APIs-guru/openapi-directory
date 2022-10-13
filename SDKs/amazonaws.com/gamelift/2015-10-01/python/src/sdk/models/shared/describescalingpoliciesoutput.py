from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import scalingpolicy


@dataclass_json
@dataclass
class DescribeScalingPoliciesOutput:
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    scaling_policies: Optional[List[scalingpolicy.ScalingPolicy]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ScalingPolicies' }})
    
