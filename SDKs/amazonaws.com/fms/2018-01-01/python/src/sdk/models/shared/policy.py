from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import resourcetag
from . import securityservicepolicydata


@dataclass_json
@dataclass
class Policy:
    delete_unused_fm_managed_resources: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DeleteUnusedFMManagedResources' }})
    exclude_map: Optional[dict[str, List[str]]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ExcludeMap' }})
    exclude_resource_tags: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ExcludeResourceTags' }})
    include_map: Optional[dict[str, List[str]]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IncludeMap' }})
    policy_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PolicyId' }})
    policy_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PolicyName' }})
    policy_update_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PolicyUpdateToken' }})
    remediation_enabled: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RemediationEnabled' }})
    resource_tags: Optional[List[resourcetag.ResourceTag]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ResourceTags' }})
    resource_type: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ResourceType' }})
    resource_type_list: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ResourceTypeList' }})
    security_service_policy_data: securityservicepolicydata.SecurityServicePolicyData = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SecurityServicePolicyData' }})
    
