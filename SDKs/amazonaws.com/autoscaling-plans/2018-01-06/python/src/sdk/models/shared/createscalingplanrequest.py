from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from . import applicationsource
from . import scalinginstruction


@dataclass_json
@dataclass
class CreateScalingPlanRequest:
    application_source: applicationsource.ApplicationSource = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ApplicationSource' }})
    scaling_instructions: List[scalinginstruction.ScalingInstruction] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ScalingInstructions' }})
    scaling_plan_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ScalingPlanName' }})
    
