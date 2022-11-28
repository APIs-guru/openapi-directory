from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class TestGridVpcConfig:
    r"""TestGridVpcConfig
    The VPC security groups and subnets that are attached to a project.
    """
    
    security_group_ids: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('securityGroupIds') }})
    subnet_ids: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('subnetIds') }})
    vpc_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('vpcId') }})
    
