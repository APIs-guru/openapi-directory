from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared

class GetRepositoryPolicyXAmzTargetEnum(str, Enum):
    SPENCER_FRONTEND_SERVICE_GET_REPOSITORY_POLICY = "SpencerFrontendService.GetRepositoryPolicy"


@dataclass
class GetRepositoryPolicyHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    x_amz_target: GetRepositoryPolicyXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target' }})
    

@dataclass
class GetRepositoryPolicyRequest:
    headers: GetRepositoryPolicyHeaders = field(default=None)
    request: shared.GetRepositoryPolicyRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class GetRepositoryPolicyResponse:
    content_type: str = field(default=None)
    get_repository_policy_response: Optional[shared.GetRepositoryPolicyResponse] = field(default=None)
    invalid_parameter_exception: Optional[Any] = field(default=None)
    repository_not_found_exception: Optional[Any] = field(default=None)
    repository_policy_not_found_exception: Optional[Any] = field(default=None)
    server_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
