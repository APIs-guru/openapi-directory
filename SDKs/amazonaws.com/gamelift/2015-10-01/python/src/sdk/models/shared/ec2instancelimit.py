from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Ec2InstanceLimit:
    r"""Ec2InstanceLimit
    <p>The GameLift service limits for an EC2 instance type and current utilization. GameLift allows AWS accounts a maximum number of instances, per instance type, per AWS Region or location, for use with GameLift. You can request an limit increase for your account by using the <b>Service limits</b> page in the GameLift console.</p> <p> <b>Related actions</b> </p> <p> <a>DescribeEC2InstanceLimits</a> </p>
    """
    
    current_instances: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CurrentInstances') }})
    ec2_instance_type: Optional[Ec2InstanceTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EC2InstanceType') }})
    instance_limit: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('InstanceLimit') }})
    location: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Location') }})
    
