from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class DeleteAccessPolicyPathParams:
    access_policy_id: str = field(default=None, metadata={'path_param': { 'field_name': 'accessPolicyId', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteAccessPolicyQueryParams:
    client_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'clientToken', 'style': 'form', 'explode': True }})
    

@dataclass
class DeleteAccessPolicyHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    

@dataclass
class DeleteAccessPolicyRequest:
    path_params: DeleteAccessPolicyPathParams = field(default=None)
    query_params: DeleteAccessPolicyQueryParams = field(default=None)
    headers: DeleteAccessPolicyHeaders = field(default=None)
    

@dataclass
class DeleteAccessPolicyResponse:
    content_type: str = field(default=None)
    delete_access_policy_response: Optional[dict[str, Any]] = field(default=None)
    internal_failure_exception: Optional[Any] = field(default=None)
    invalid_request_exception: Optional[Any] = field(default=None)
    resource_not_found_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    throttling_exception: Optional[Any] = field(default=None)
    
