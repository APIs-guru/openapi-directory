from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class VpcConfigurationDescription:
    r"""VpcConfigurationDescription
    The details of the VPC of the Amazon ES destination.
    """
    
    role_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('RoleARN') }})
    security_group_ids: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('SecurityGroupIds') }})
    subnet_ids: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('SubnetIds') }})
    vpc_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('VpcId') }})
    
