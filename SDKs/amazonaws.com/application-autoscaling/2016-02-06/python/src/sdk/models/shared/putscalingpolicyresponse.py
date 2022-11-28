from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class PutScalingPolicyResponse:
    policy_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('PolicyARN') }})
    alarms: Optional[List[Alarm]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Alarms') }})
    
