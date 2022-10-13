from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import remediationactiontype_enum
from . import securitygroupruledescription


@dataclass_json
@dataclass
class SecurityGroupRemediationAction:
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Description' }})
    is_default_action: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IsDefaultAction' }})
    remediation_action_type: Optional[remediationactiontype_enum.RemediationActionTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RemediationActionType' }})
    remediation_result: Optional[securitygroupruledescription.SecurityGroupRuleDescription] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RemediationResult' }})
    
