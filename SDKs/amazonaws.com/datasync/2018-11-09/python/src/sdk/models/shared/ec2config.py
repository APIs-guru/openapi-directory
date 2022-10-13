from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Ec2Config:
    security_group_arns: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SecurityGroupArns' }})
    subnet_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SubnetArn' }})
    
