from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class Ec2Config:
    r"""Ec2Config
    The subnet and the security group that DataSync uses to access target EFS file system. The subnet must have at least one mount target for that file system. The security group that you provide needs to be able to communicate with the security group on the mount target in the subnet specified. 
    """
    
    security_group_arns: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('SecurityGroupArns') }})
    subnet_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('SubnetArn') }})
    
