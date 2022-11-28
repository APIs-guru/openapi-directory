from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CreateScalingPlanRequest:
    application_source: ApplicationSource = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ApplicationSource') }})
    scaling_instructions: List[ScalingInstruction] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ScalingInstructions') }})
    scaling_plan_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ScalingPlanName') }})
    
