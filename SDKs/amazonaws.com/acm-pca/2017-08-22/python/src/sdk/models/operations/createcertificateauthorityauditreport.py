from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared

class CreateCertificateAuthorityAuditReportXAmzTargetEnum(str, Enum):
    ACM_PRIVATE_CA_CREATE_CERTIFICATE_AUTHORITY_AUDIT_REPORT = "ACMPrivateCA.CreateCertificateAuthorityAuditReport"


@dataclass
class CreateCertificateAuthorityAuditReportHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    x_amz_target: CreateCertificateAuthorityAuditReportXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target' }})
    

@dataclass
class CreateCertificateAuthorityAuditReportRequest:
    headers: CreateCertificateAuthorityAuditReportHeaders = field(default=None)
    request: shared.CreateCertificateAuthorityAuditReportRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateCertificateAuthorityAuditReportResponse:
    content_type: str = field(default=None)
    create_certificate_authority_audit_report_response: Optional[shared.CreateCertificateAuthorityAuditReportResponse] = field(default=None)
    invalid_args_exception: Optional[Any] = field(default=None)
    invalid_arn_exception: Optional[Any] = field(default=None)
    invalid_state_exception: Optional[Any] = field(default=None)
    request_failed_exception: Optional[Any] = field(default=None)
    request_in_progress_exception: Optional[Any] = field(default=None)
    resource_not_found_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
