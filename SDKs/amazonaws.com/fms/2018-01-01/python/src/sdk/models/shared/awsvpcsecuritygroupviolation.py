from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class AwsVpcSecurityGroupViolation:
    r"""AwsVpcSecurityGroupViolation
    Violation detail for the rule violation in a security group when compared to the primary security group of the Firewall Manager policy.
    """
    
    partial_matches: Optional[List[PartialMatch]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PartialMatches') }})
    possible_security_group_remediation_actions: Optional[List[SecurityGroupRemediationAction]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PossibleSecurityGroupRemediationActions') }})
    violation_target: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ViolationTarget') }})
    violation_target_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ViolationTargetDescription') }})
    
