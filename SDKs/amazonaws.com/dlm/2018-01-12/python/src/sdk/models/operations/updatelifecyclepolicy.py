from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class UpdateLifecyclePolicyPathParams:
    policy_id: str = field(metadata={'path_param': { 'field_name': 'policyId', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateLifecyclePolicyHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class UpdateLifecyclePolicyRequestBodyPolicyDetails:
    r"""UpdateLifecyclePolicyRequestBodyPolicyDetails
    Specifies the configuration of a lifecycle policy.
    """
    
    actions: Optional[List[shared.Action]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Actions') }})
    event_source: Optional[shared.EventSource] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EventSource') }})
    parameters: Optional[shared.Parameters] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Parameters') }})
    policy_type: Optional[shared.PolicyTypeValuesEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PolicyType') }})
    resource_locations: Optional[List[shared.ResourceLocationValuesEnum]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ResourceLocations') }})
    resource_types: Optional[List[shared.ResourceTypeValuesEnum]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ResourceTypes') }})
    schedules: Optional[List[shared.Schedule]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Schedules') }})
    target_tags: Optional[List[shared.Tag]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TargetTags') }})
    
class UpdateLifecyclePolicyRequestBodyStateEnum(str, Enum):
    ENABLED = "ENABLED"
    DISABLED = "DISABLED"


@dataclass_json
@dataclass
class UpdateLifecyclePolicyRequestBody:
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Description') }})
    execution_role_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ExecutionRoleArn') }})
    policy_details: Optional[UpdateLifecyclePolicyRequestBodyPolicyDetails] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PolicyDetails') }})
    state: Optional[UpdateLifecyclePolicyRequestBodyStateEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('State') }})
    

@dataclass
class UpdateLifecyclePolicyRequest:
    headers: UpdateLifecyclePolicyHeaders = field()
    path_params: UpdateLifecyclePolicyPathParams = field()
    request: UpdateLifecyclePolicyRequestBody = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateLifecyclePolicyResponse:
    content_type: str = field()
    status_code: int = field()
    internal_server_exception: Optional[Any] = field(default=None)
    invalid_request_exception: Optional[Any] = field(default=None)
    limit_exceeded_exception: Optional[Any] = field(default=None)
    resource_not_found_exception: Optional[Any] = field(default=None)
    update_lifecycle_policy_response: Optional[dict[str, Any]] = field(default=None)
    
