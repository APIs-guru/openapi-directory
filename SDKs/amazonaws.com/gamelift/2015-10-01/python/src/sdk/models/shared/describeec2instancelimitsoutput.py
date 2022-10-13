from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import ec2instancelimit


@dataclass_json
@dataclass
class DescribeEc2InstanceLimitsOutput:
    ec2_instance_limits: Optional[List[ec2instancelimit.Ec2InstanceLimit]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EC2InstanceLimits' }})
    
