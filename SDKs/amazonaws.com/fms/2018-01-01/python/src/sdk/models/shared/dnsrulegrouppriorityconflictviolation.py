from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class DNSRuleGroupPriorityConflictViolation:
    conflicting_policy_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ConflictingPolicyId' }})
    conflicting_priority: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ConflictingPriority' }})
    unavailable_priorities: Optional[List[int]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'UnavailablePriorities' }})
    violation_target: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ViolationTarget' }})
    violation_target_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ViolationTargetDescription' }})
    
