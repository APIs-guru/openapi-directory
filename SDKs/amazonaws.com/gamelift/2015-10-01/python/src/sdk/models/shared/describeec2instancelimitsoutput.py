from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DescribeEc2InstanceLimitsOutput:
    r"""DescribeEc2InstanceLimitsOutput
    Represents the returned data in response to a request operation.
    """
    
    ec2_instance_limits: Optional[List[Ec2InstanceLimit]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EC2InstanceLimits') }})
    
