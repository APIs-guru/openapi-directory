from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared

class DeregisterCertificateXAmzTargetEnum(str, Enum):
    DIRECTORY_SERVICE_20150416_DEREGISTER_CERTIFICATE = "DirectoryService_20150416.DeregisterCertificate"


@dataclass
class DeregisterCertificateHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    x_amz_target: DeregisterCertificateXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeregisterCertificateRequest:
    headers: DeregisterCertificateHeaders = field(default=None)
    request: shared.DeregisterCertificateRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class DeregisterCertificateResponse:
    certificate_does_not_exist_exception: Optional[Any] = field(default=None)
    certificate_in_use_exception: Optional[Any] = field(default=None)
    client_exception: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    deregister_certificate_result: Optional[dict[str, Any]] = field(default=None)
    directory_does_not_exist_exception: Optional[Any] = field(default=None)
    directory_unavailable_exception: Optional[Any] = field(default=None)
    invalid_parameter_exception: Optional[Any] = field(default=None)
    service_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    unsupported_operation_exception: Optional[Any] = field(default=None)
    
