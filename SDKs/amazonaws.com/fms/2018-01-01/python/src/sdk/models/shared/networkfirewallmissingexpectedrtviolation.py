from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class NetworkFirewallMissingExpectedRtViolation:
    availability_zone: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AvailabilityZone' }})
    current_route_table: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CurrentRouteTable' }})
    expected_route_table: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ExpectedRouteTable' }})
    vpc: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'VPC' }})
    violation_target: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ViolationTarget' }})
    
