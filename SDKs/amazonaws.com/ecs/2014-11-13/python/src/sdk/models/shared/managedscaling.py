from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ManagedScaling:
    r"""ManagedScaling
    <p>The managed scaling settings for the Auto Scaling group capacity provider.</p> <p>When managed scaling is enabled, Amazon ECS manages the scale-in and scale-out actions of the Auto Scaling group. Amazon ECS manages a target tracking scaling policy using an Amazon ECS-managed CloudWatch metric with the specified <code>targetCapacity</code> value as the target value for the metric. For more information, see <a href=\"https://docs.aws.amazon.com/AmazonECS/latest/developerguide/asg-capacity-providers.html#asg-capacity-providers-managed-scaling\">Using Managed Scaling</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p> <p>If managed scaling is disabled, the user must manage the scaling of the Auto Scaling group.</p>
    """
    
    instance_warmup_period: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('instanceWarmupPeriod') }})
    maximum_scaling_step_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maximumScalingStepSize') }})
    minimum_scaling_step_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('minimumScalingStepSize') }})
    status: Optional[ManagedScalingStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    target_capacity: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('targetCapacity') }})
    
