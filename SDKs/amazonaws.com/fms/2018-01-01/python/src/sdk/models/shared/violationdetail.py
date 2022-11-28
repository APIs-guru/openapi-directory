from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ViolationDetail:
    r"""ViolationDetail
    Violations for a resource based on the specified Firewall Manager policy and Amazon Web Services account.
    """
    
    member_account: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('MemberAccount') }})
    policy_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('PolicyId') }})
    resource_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ResourceId') }})
    resource_type: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ResourceType') }})
    resource_violations: List[ResourceViolation] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ResourceViolations') }})
    resource_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ResourceDescription') }})
    resource_tags: Optional[List[Tag]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ResourceTags') }})
    
