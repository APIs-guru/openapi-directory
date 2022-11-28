from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class SecurityGroupRemediationAction:
    r"""SecurityGroupRemediationAction
    Remediation option for the rule specified in the <code>ViolationTarget</code>.
    """
    
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Description') }})
    is_default_action: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IsDefaultAction') }})
    remediation_action_type: Optional[RemediationActionTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RemediationActionType') }})
    remediation_result: Optional[SecurityGroupRuleDescription] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RemediationResult') }})
    
