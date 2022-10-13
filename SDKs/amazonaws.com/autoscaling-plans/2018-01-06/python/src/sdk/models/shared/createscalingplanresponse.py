from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class CreateScalingPlanResponse:
    scaling_plan_version: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ScalingPlanVersion' }})
    
