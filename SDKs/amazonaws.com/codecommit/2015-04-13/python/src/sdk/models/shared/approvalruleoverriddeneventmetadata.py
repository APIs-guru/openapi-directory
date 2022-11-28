from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ApprovalRuleOverriddenEventMetadata:
    r"""ApprovalRuleOverriddenEventMetadata
    Returns information about an override event for approval rules for a pull request.
    """
    
    override_status: Optional[OverrideStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('overrideStatus') }})
    revision_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('revisionId') }})
    
