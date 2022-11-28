from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class NetworkFirewallMissingFirewallViolation:
    r"""NetworkFirewallMissingFirewallViolation
    Violation detail for Network Firewall for a subnet that doesn't have a Firewall Manager managed firewall in its VPC. 
    """
    
    availability_zone: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AvailabilityZone') }})
    target_violation_reason: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TargetViolationReason') }})
    vpc: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('VPC') }})
    violation_target: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ViolationTarget') }})
    
