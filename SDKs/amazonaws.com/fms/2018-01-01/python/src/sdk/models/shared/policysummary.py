from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import securityservicetype_enum


@dataclass_json
@dataclass
class PolicySummary:
    delete_unused_fm_managed_resources: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DeleteUnusedFMManagedResources' }})
    policy_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PolicyArn' }})
    policy_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PolicyId' }})
    policy_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PolicyName' }})
    remediation_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RemediationEnabled' }})
    resource_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ResourceType' }})
    security_service_type: Optional[securityservicetype_enum.SecurityServiceTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SecurityServiceType' }})
    
