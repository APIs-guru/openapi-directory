from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class AwsEc2InstanceViolation:
    r"""AwsEc2InstanceViolation
    Violation detail for an EC2 instance resource.
    """
    
    aws_ec2_network_interface_violations: Optional[List[AwsEc2NetworkInterfaceViolation]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AwsEc2NetworkInterfaceViolations') }})
    violation_target: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ViolationTarget') }})
    
