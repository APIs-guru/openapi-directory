from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Evaluation:
    approval_rules_not_satisfied: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'approvalRulesNotSatisfied' }})
    approval_rules_satisfied: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'approvalRulesSatisfied' }})
    approved: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'approved' }})
    overridden: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'overridden' }})
    
