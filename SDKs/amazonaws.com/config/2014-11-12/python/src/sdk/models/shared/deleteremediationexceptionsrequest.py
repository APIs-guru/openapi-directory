from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DeleteRemediationExceptionsRequest:
    config_rule_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ConfigRuleName') }})
    resource_keys: List[RemediationExceptionResourceKey] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ResourceKeys') }})
    
