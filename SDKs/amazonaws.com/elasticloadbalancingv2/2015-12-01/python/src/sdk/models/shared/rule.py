from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class Rule:
    r"""Rule
    Information about a rule.
    """
    
    actions: Optional[List[Action]] = field(default=None)
    conditions: Optional[List[RuleCondition]] = field(default=None)
    is_default: Optional[bool] = field(default=None)
    priority: Optional[str] = field(default=None)
    rule_arn: Optional[str] = field(default=None)
    
