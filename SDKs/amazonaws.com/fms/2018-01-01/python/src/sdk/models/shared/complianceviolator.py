from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ComplianceViolator:
    r"""ComplianceViolator
    Details of the resource that is not protected by the policy.
    """
    
    resource_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ResourceId') }})
    resource_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ResourceType') }})
    violation_reason: Optional[ViolationReasonEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ViolationReason') }})
    
