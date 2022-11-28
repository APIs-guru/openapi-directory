from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class AwsVpcConfiguration:
    r"""AwsVpcConfiguration
    This structure specifies the VPC subnets and security groups for the task, and whether a public IP address is to be used. This structure is relevant only for ECS tasks that use the <code>awsvpc</code> network mode.
    """
    
    subnets: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Subnets') }})
    assign_public_ip: Optional[AssignPublicIPEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AssignPublicIp') }})
    security_groups: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SecurityGroups') }})
    
