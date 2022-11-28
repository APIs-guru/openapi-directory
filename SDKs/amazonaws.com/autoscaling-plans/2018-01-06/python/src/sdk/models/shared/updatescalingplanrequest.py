from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class UpdateScalingPlanRequest:
    scaling_plan_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ScalingPlanName') }})
    scaling_plan_version: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ScalingPlanVersion') }})
    application_source: Optional[ApplicationSource] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ApplicationSource') }})
    scaling_instructions: Optional[List[ScalingInstruction]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ScalingInstructions') }})
    
