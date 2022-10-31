from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared

class ExportCertificateXAmzTargetEnum(str, Enum):
    CERTIFICATE_MANAGER_EXPORT_CERTIFICATE = "CertificateManager.ExportCertificate"


@dataclass
class ExportCertificateHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    x_amz_target: ExportCertificateXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    

@dataclass
class ExportCertificateRequest:
    headers: ExportCertificateHeaders = field(default=None)
    request: shared.ExportCertificateRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class ExportCertificateResponse:
    content_type: str = field(default=None)
    export_certificate_response: Optional[shared.ExportCertificateResponse] = field(default=None)
    invalid_arn_exception: Optional[Any] = field(default=None)
    request_in_progress_exception: Optional[Any] = field(default=None)
    resource_not_found_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
