from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class Evaluation:
    r"""Evaluation
    Returns information about the approval rules applied to a pull request and whether conditions have been met.
    """
    
    approval_rules_not_satisfied: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('approvalRulesNotSatisfied') }})
    approval_rules_satisfied: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('approvalRulesSatisfied') }})
    approved: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('approved') }})
    overridden: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('overridden') }})
    
