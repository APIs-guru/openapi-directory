from dataclasses import dataclass, field
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class MappingRule:
    r"""MappingRule
    A rule that maps a claim name, a claim value, and a match type to a role ARN.
    """
    
    claim: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Claim') }})
    match_type: MappingRuleMatchTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('MatchType') }})
    role_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('RoleARN') }})
    value: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Value') }})
    
