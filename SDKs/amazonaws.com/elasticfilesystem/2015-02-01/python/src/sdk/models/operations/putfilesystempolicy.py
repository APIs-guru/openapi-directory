from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class PutFileSystemPolicyPathParams:
    file_system_id: str = field(default=None, metadata={'path_param': { 'field_name': 'FileSystemId', 'style': 'simple', 'explode': False }})
    

@dataclass
class PutFileSystemPolicyHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class PutFileSystemPolicyRequestBody:
    bypass_policy_lockout_safety_check: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'BypassPolicyLockoutSafetyCheck' }})
    policy: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Policy' }})
    

@dataclass
class PutFileSystemPolicyRequest:
    path_params: PutFileSystemPolicyPathParams = field(default=None)
    headers: PutFileSystemPolicyHeaders = field(default=None)
    request: PutFileSystemPolicyRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PutFileSystemPolicyResponse:
    content_type: str = field(default=None)
    file_system_not_found: Optional[Any] = field(default=None)
    file_system_policy_description: Optional[shared.FileSystemPolicyDescription] = field(default=None)
    incorrect_file_system_life_cycle_state: Optional[Any] = field(default=None)
    internal_server_error: Optional[Any] = field(default=None)
    invalid_policy_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
