from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class PutResourcePolicyRequest:
    policy_in_json: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('PolicyInJson') }})
    enable_hybrid: Optional[EnableHybridValuesEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EnableHybrid') }})
    policy_exists_condition: Optional[ExistConditionEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PolicyExistsCondition') }})
    policy_hash_condition: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PolicyHashCondition') }})
    resource_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ResourceArn') }})
    
