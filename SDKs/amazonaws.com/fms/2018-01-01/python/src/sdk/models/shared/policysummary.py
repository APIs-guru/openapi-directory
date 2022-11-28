from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class PolicySummary:
    r"""PolicySummary
    Details of the Firewall Manager policy. 
    """
    
    delete_unused_fm_managed_resources: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DeleteUnusedFMManagedResources') }})
    policy_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PolicyArn') }})
    policy_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PolicyId') }})
    policy_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PolicyName') }})
    remediation_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RemediationEnabled') }})
    resource_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ResourceType') }})
    security_service_type: Optional[SecurityServiceTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SecurityServiceType') }})
    
