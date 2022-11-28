from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DescribeRemediationExecutionStatusRequest:
    config_rule_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ConfigRuleName') }})
    limit: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Limit') }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    resource_keys: Optional[List[ResourceKey]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ResourceKeys') }})
    
