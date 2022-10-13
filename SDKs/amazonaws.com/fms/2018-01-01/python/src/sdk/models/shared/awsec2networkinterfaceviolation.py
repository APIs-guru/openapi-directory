from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class AwsEc2NetworkInterfaceViolation:
    violating_security_groups: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ViolatingSecurityGroups' }})
    violation_target: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ViolationTarget' }})
    
