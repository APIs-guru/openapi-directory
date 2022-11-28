from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class NetworkFirewallMissingExpectedRtViolation:
    r"""NetworkFirewallMissingExpectedRtViolation
    Violation detail for Network Firewall for a subnet that's not associated to the expected Firewall Manager managed route table.
    """
    
    availability_zone: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AvailabilityZone') }})
    current_route_table: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CurrentRouteTable') }})
    expected_route_table: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ExpectedRouteTable') }})
    vpc: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('VPC') }})
    violation_target: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ViolationTarget') }})
    
