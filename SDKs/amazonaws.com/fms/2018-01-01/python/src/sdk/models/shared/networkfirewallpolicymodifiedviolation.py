from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import networkfirewallpolicydescription
from . import networkfirewallpolicydescription


@dataclass_json
@dataclass
class NetworkFirewallPolicyModifiedViolation:
    current_policy_description: Optional[networkfirewallpolicydescription.NetworkFirewallPolicyDescription] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CurrentPolicyDescription' }})
    expected_policy_description: Optional[networkfirewallpolicydescription.NetworkFirewallPolicyDescription] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ExpectedPolicyDescription' }})
    violation_target: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ViolationTarget' }})
    
