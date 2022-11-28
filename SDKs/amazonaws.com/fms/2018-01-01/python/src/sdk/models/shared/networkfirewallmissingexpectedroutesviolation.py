from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class NetworkFirewallMissingExpectedRoutesViolation:
    r"""NetworkFirewallMissingExpectedRoutesViolation
    Violation detail for an expected route missing in Network Firewall.
    """
    
    expected_routes: Optional[List[ExpectedRoute]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ExpectedRoutes') }})
    violation_target: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ViolationTarget') }})
    vpc_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('VpcId') }})
    
