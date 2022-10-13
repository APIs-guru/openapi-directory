from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from . import scalingconstraints
from . import scalingrule


@dataclass_json
@dataclass
class AutoScalingPolicy:
    constraints: scalingconstraints.ScalingConstraints = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Constraints' }})
    rules: List[scalingrule.ScalingRule] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Rules' }})
    
