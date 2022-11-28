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
    An object representing the networking details for a task or service.
    """
    
    subnets: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('subnets') }})
    assign_public_ip: Optional[AssignPublicIPEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('assignPublicIp') }})
    security_groups: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('securityGroups') }})
    
