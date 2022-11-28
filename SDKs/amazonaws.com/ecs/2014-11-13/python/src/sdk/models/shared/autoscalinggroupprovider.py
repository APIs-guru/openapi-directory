from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class AutoScalingGroupProvider:
    r"""AutoScalingGroupProvider
    The details of the Auto Scaling group for the capacity provider.
    """
    
    auto_scaling_group_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('autoScalingGroupArn') }})
    managed_scaling: Optional[ManagedScaling] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('managedScaling') }})
    managed_termination_protection: Optional[ManagedTerminationProtectionEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('managedTerminationProtection') }})
    
