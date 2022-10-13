from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import autoscalinggroup


@dataclass_json
@dataclass
class DeleteDeploymentGroupOutput:
    hooks_not_cleaned_up: Optional[List[autoscalinggroup.AutoScalingGroup]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hooksNotCleanedUp' }})
    
