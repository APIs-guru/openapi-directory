from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import scalingconstraints
from . import scalingrule
from . import autoscalingpolicystatus


@dataclass_json
@dataclass
class AutoScalingPolicyDescription:
    constraints: Optional[scalingconstraints.ScalingConstraints] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Constraints' }})
    rules: Optional[List[scalingrule.ScalingRule]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Rules' }})
    status: Optional[autoscalingpolicystatus.AutoScalingPolicyStatus] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Status' }})
    
