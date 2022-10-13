from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class NetworkFirewallMissingFirewallViolation:
    availability_zone: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AvailabilityZone' }})
    target_violation_reason: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TargetViolationReason' }})
    vpc: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'VPC' }})
    violation_target: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ViolationTarget' }})
    
