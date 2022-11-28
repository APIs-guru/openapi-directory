from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Policy:
    r"""Policy
    An Firewall Manager policy.
    """
    
    exclude_resource_tags: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ExcludeResourceTags') }})
    policy_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('PolicyName') }})
    remediation_enabled: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('RemediationEnabled') }})
    resource_type: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ResourceType') }})
    security_service_policy_data: SecurityServicePolicyData = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('SecurityServicePolicyData') }})
    delete_unused_fm_managed_resources: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DeleteUnusedFMManagedResources') }})
    exclude_map: Optional[dict[str, List[str]]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ExcludeMap') }})
    include_map: Optional[dict[str, List[str]]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IncludeMap') }})
    policy_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PolicyId') }})
    policy_update_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PolicyUpdateToken') }})
    resource_tags: Optional[List[ResourceTag]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ResourceTags') }})
    resource_type_list: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ResourceTypeList') }})
    
