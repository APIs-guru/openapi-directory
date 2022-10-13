from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class AttachPrincipalPolicyPathParams:
    policy_name: str = field(default=None, metadata={'path_param': { 'field_name': 'policyName', 'style': 'simple', 'explode': False }})
    

@dataclass
class AttachPrincipalPolicyHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    x_amzn_iot_principal: str = field(default=None, metadata={'header': { 'field_name': 'x-amzn-iot-principal' }})
    

@dataclass
class AttachPrincipalPolicyRequest:
    path_params: AttachPrincipalPolicyPathParams = field(default=None)
    headers: AttachPrincipalPolicyHeaders = field(default=None)
    

@dataclass
class AttachPrincipalPolicyResponse:
    content_type: str = field(default=None)
    internal_failure_exception: Optional[Any] = field(default=None)
    invalid_request_exception: Optional[Any] = field(default=None)
    limit_exceeded_exception: Optional[Any] = field(default=None)
    resource_not_found_exception: Optional[Any] = field(default=None)
    service_unavailable_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    throttling_exception: Optional[Any] = field(default=None)
    unauthorized_exception: Optional[Any] = field(default=None)
    
