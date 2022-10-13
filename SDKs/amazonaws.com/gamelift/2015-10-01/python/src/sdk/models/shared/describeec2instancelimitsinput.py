from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import ec2instancetype_enum


@dataclass_json
@dataclass
class DescribeEc2InstanceLimitsInput:
    ec2_instance_type: Optional[ec2instancetype_enum.Ec2InstanceTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EC2InstanceType' }})
    location: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Location' }})
    
