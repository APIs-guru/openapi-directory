from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class DNSRuleGroupLimitExceededViolation:
    number_of_rule_groups_already_associated: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NumberOfRuleGroupsAlreadyAssociated' }})
    violation_target: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ViolationTarget' }})
    violation_target_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ViolationTargetDescription' }})
    
