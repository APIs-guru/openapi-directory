from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import partialmatch
from . import securitygroupremediationaction


@dataclass_json
@dataclass
class AwsVpcSecurityGroupViolation:
    partial_matches: Optional[List[partialmatch.PartialMatch]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PartialMatches' }})
    possible_security_group_remediation_actions: Optional[List[securitygroupremediationaction.SecurityGroupRemediationAction]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PossibleSecurityGroupRemediationActions' }})
    violation_target: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ViolationTarget' }})
    violation_target_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ViolationTargetDescription' }})
    
