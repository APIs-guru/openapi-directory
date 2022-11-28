from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DescribeEc2InstanceLimitsInput:
    r"""DescribeEc2InstanceLimitsInput
    Represents the input for a request operation.
    """
    
    ec2_instance_type: Optional[Ec2InstanceTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EC2InstanceType') }})
    location: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Location') }})
    
