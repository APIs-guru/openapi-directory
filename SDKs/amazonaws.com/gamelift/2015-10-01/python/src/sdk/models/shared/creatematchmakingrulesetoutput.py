from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CreateMatchmakingRuleSetOutput:
    r"""CreateMatchmakingRuleSetOutput
    Represents the returned data in response to a request operation.
    """
    
    rule_set: MatchmakingRuleSet = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('RuleSet') }})
    
