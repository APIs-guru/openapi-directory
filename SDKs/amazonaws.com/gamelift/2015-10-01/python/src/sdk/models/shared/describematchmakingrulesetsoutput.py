from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DescribeMatchmakingRuleSetsOutput:
    r"""DescribeMatchmakingRuleSetsOutput
    Represents the returned data in response to a request operation.
    """
    
    rule_sets: List[MatchmakingRuleSet] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('RuleSets') }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    
