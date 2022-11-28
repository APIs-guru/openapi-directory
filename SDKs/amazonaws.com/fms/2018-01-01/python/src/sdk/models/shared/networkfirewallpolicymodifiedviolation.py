from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class NetworkFirewallPolicyModifiedViolation:
    r"""NetworkFirewallPolicyModifiedViolation
    Violation detail for Network Firewall for a firewall policy that has a different <a>NetworkFirewallPolicyDescription</a> than is required by the Firewall Manager policy. 
    """
    
    current_policy_description: Optional[NetworkFirewallPolicyDescription] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CurrentPolicyDescription') }})
    expected_policy_description: Optional[NetworkFirewallPolicyDescription] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ExpectedPolicyDescription') }})
    violation_target: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ViolationTarget') }})
    
