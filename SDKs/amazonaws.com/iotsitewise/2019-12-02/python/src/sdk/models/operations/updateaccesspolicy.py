from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class UpdateAccessPolicyPathParams:
    access_policy_id: str = field(default=None, metadata={'path_param': { 'field_name': 'accessPolicyId', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateAccessPolicyHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    

@dataclass_json
@dataclass
class UpdateAccessPolicyRequestBodyAccessPolicyIdentity:
    group: Optional[shared.GroupIdentity] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'group' }})
    iam_role: Optional[shared.IamRoleIdentity] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'iamRole' }})
    iam_user: Optional[shared.IamUserIdentity] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'iamUser' }})
    user: Optional[shared.UserIdentity] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'user' }})
    
class UpdateAccessPolicyRequestBodyAccessPolicyPermissionEnum(str, Enum):
    ADMINISTRATOR = "ADMINISTRATOR"
    VIEWER = "VIEWER"


@dataclass_json
@dataclass
class UpdateAccessPolicyRequestBodyAccessPolicyResource:
    portal: Optional[shared.PortalResource] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'portal' }})
    project: Optional[shared.ProjectResource] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'project' }})
    

@dataclass_json
@dataclass
class UpdateAccessPolicyRequestBody:
    access_policy_identity: UpdateAccessPolicyRequestBodyAccessPolicyIdentity = field(default=None, metadata={'dataclasses_json': { 'field_name': 'accessPolicyIdentity' }})
    access_policy_permission: UpdateAccessPolicyRequestBodyAccessPolicyPermissionEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'accessPolicyPermission' }})
    access_policy_resource: UpdateAccessPolicyRequestBodyAccessPolicyResource = field(default=None, metadata={'dataclasses_json': { 'field_name': 'accessPolicyResource' }})
    client_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'clientToken' }})
    

@dataclass
class UpdateAccessPolicyRequest:
    path_params: UpdateAccessPolicyPathParams = field(default=None)
    headers: UpdateAccessPolicyHeaders = field(default=None)
    request: UpdateAccessPolicyRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateAccessPolicyResponse:
    content_type: str = field(default=None)
    internal_failure_exception: Optional[Any] = field(default=None)
    invalid_request_exception: Optional[Any] = field(default=None)
    resource_not_found_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    throttling_exception: Optional[Any] = field(default=None)
    update_access_policy_response: Optional[dict[str, Any]] = field(default=None)
    
