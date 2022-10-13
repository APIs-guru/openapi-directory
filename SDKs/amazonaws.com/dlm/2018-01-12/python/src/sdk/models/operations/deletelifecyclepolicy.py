from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class DeleteLifecyclePolicyPathParams:
    policy_id: str = field(default=None, metadata={'path_param': { 'field_name': 'policyId', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteLifecyclePolicyHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    

@dataclass
class DeleteLifecyclePolicyRequest:
    path_params: DeleteLifecyclePolicyPathParams = field(default=None)
    headers: DeleteLifecyclePolicyHeaders = field(default=None)
    

@dataclass
class DeleteLifecyclePolicyResponse:
    content_type: str = field(default=None)
    delete_lifecycle_policy_response: Optional[dict[str, Any]] = field(default=None)
    internal_server_exception: Optional[Any] = field(default=None)
    limit_exceeded_exception: Optional[Any] = field(default=None)
    resource_not_found_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
