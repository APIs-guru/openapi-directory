from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import expectedroute


@dataclass_json
@dataclass
class NetworkFirewallMissingExpectedRoutesViolation:
    expected_routes: Optional[List[expectedroute.ExpectedRoute]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ExpectedRoutes' }})
    violation_target: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ViolationTarget' }})
    vpc_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'VpcId' }})
    
