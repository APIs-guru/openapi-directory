from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Role:
    r"""Role
     The wrapper that contains the Audit Manager role information of the current user, such as the role type and IAM Amazon Resource Name (ARN). 
    """
    
    role_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('roleArn') }})
    role_type: Optional[RoleTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('roleType') }})
    
