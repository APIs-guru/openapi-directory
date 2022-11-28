from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CreateDelegationRequest:
    r"""CreateDelegationRequest
     A collection of attributes used to create a delegation for an assessment in Audit Manager. 
    """
    
    comment: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('comment') }})
    control_set_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('controlSetId') }})
    role_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('roleArn') }})
    role_type: Optional[RoleTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('roleType') }})
    
