from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class LookupPolicyResponse:
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    policy_to_path_list: Optional[List[PolicyToPath]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PolicyToPathList') }})
    
