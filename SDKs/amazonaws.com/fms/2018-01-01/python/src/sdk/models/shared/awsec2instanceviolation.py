from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import awsec2networkinterfaceviolation


@dataclass_json
@dataclass
class AwsEc2InstanceViolation:
    aws_ec2_network_interface_violations: Optional[List[awsec2networkinterfaceviolation.AwsEc2NetworkInterfaceViolation]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AwsEc2NetworkInterfaceViolations' }})
    violation_target: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ViolationTarget' }})
    
