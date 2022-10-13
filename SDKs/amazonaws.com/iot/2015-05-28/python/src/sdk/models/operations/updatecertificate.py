from dataclasses import dataclass, field
from typing import Any,Enum,Optional


@dataclass
class UpdateCertificatePathParams:
    certificate_id: str = field(default=None, metadata={'path_param': { 'field_name': 'certificateId', 'style': 'simple', 'explode': False }})
    
class UpdateCertificateNewStatusEnum(str, Enum):
    ACTIVE = "ACTIVE"
    INACTIVE = "INACTIVE"
    REVOKED = "REVOKED"
    PENDING_TRANSFER = "PENDING_TRANSFER"
    REGISTER_INACTIVE = "REGISTER_INACTIVE"
    PENDING_ACTIVATION = "PENDING_ACTIVATION"


@dataclass
class UpdateCertificateQueryParams:
    new_status: UpdateCertificateNewStatusEnum = field(default=None, metadata={'query_param': { 'field_name': 'newStatus', 'style': 'form', 'explode': True }})
    

@dataclass
class UpdateCertificateHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    

@dataclass
class UpdateCertificateRequest:
    path_params: UpdateCertificatePathParams = field(default=None)
    query_params: UpdateCertificateQueryParams = field(default=None)
    headers: UpdateCertificateHeaders = field(default=None)
    

@dataclass
class UpdateCertificateResponse:
    certificate_state_exception: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    internal_failure_exception: Optional[Any] = field(default=None)
    invalid_request_exception: Optional[Any] = field(default=None)
    resource_not_found_exception: Optional[Any] = field(default=None)
    service_unavailable_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    throttling_exception: Optional[Any] = field(default=None)
    unauthorized_exception: Optional[Any] = field(default=None)
    
