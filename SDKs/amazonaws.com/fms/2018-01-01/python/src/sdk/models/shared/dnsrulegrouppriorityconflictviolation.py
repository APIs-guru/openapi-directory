from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class DNSRuleGroupPriorityConflictViolation:
    r"""DNSRuleGroupPriorityConflictViolation
    A rule group that Firewall Manager tried to associate with a VPC has the same priority as a rule group that's already associated. 
    """
    
    conflicting_policy_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ConflictingPolicyId') }})
    conflicting_priority: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ConflictingPriority') }})
    unavailable_priorities: Optional[List[int]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('UnavailablePriorities') }})
    violation_target: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ViolationTarget') }})
    violation_target_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ViolationTargetDescription') }})
    
