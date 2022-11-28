from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class AwsEc2NetworkInterfaceViolation:
    r"""AwsEc2NetworkInterfaceViolation
    Violation detail for network interfaces associated with an EC2 instance.
    """
    
    violating_security_groups: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ViolatingSecurityGroups') }})
    violation_target: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ViolationTarget') }})
    
