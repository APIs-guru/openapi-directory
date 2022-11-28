from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class RuleEvaluation:
    r"""RuleEvaluation
    Information needed to evaluate data.
    """
    
    simple_rule_evaluation: Optional[SimpleRuleEvaluation] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('simpleRuleEvaluation') }})
    
