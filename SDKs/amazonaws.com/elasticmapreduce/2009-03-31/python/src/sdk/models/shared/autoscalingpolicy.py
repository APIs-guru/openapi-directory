from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class AutoScalingPolicy:
    r"""AutoScalingPolicy
    An automatic scaling policy for a core instance group or task instance group in an Amazon EMR cluster. An automatic scaling policy defines how an instance group dynamically adds and terminates EC2 instances in response to the value of a CloudWatch metric. See <a>PutAutoScalingPolicy</a>.
    """
    
    constraints: ScalingConstraints = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Constraints') }})
    rules: List[ScalingRule] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Rules') }})
    
