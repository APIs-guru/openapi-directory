from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DescribeScalingPlanResourcesResponse:
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    scaling_plan_resources: Optional[List[ScalingPlanResource]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ScalingPlanResources') }})
    
