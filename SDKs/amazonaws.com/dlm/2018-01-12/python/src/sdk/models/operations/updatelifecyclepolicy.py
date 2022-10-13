from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class UpdateLifecyclePolicyPathParams:
    policy_id: str = field(default=None, metadata={'path_param': { 'field_name': 'policyId', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateLifecyclePolicyHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    

@dataclass_json
@dataclass
class UpdateLifecyclePolicyRequestBodyPolicyDetails:
    actions: Optional[List[shared.Action]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Actions' }})
    event_source: Optional[shared.EventSource] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EventSource' }})
    parameters: Optional[shared.Parameters] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Parameters' }})
    policy_type: Optional[shared.PolicyTypeValuesEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PolicyType' }})
    resource_locations: Optional[List[shared.ResourceLocationValuesEnum]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ResourceLocations' }})
    resource_types: Optional[List[shared.ResourceTypeValuesEnum]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ResourceTypes' }})
    schedules: Optional[List[shared.Schedule]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Schedules' }})
    target_tags: Optional[List[shared.Tag]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TargetTags' }})
    
class UpdateLifecyclePolicyRequestBodyStateEnum(str, Enum):
    ENABLED = "ENABLED"
    DISABLED = "DISABLED"


@dataclass_json
@dataclass
class UpdateLifecyclePolicyRequestBody:
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Description' }})
    execution_role_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ExecutionRoleArn' }})
    policy_details: Optional[UpdateLifecyclePolicyRequestBodyPolicyDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PolicyDetails' }})
    state: Optional[UpdateLifecyclePolicyRequestBodyStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'State' }})
    

@dataclass
class UpdateLifecyclePolicyRequest:
    path_params: UpdateLifecyclePolicyPathParams = field(default=None)
    headers: UpdateLifecyclePolicyHeaders = field(default=None)
    request: UpdateLifecyclePolicyRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateLifecyclePolicyResponse:
    content_type: str = field(default=None)
    internal_server_exception: Optional[Any] = field(default=None)
    invalid_request_exception: Optional[Any] = field(default=None)
    limit_exceeded_exception: Optional[Any] = field(default=None)
    resource_not_found_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    update_lifecycle_policy_response: Optional[dict[str, Any]] = field(default=None)
    
