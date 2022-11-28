from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from sdk.models import shared

class CreateCertificateAuthorityAuditReportXAmzTargetEnum(str, Enum):
    ACM_PRIVATE_CA_CREATE_CERTIFICATE_AUTHORITY_AUDIT_REPORT = "ACMPrivateCA.CreateCertificateAuthorityAuditReport"


@dataclass
class CreateCertificateAuthorityAuditReportHeaders:
    x_amz_target: CreateCertificateAuthorityAuditReportXAmzTargetEnum = field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateCertificateAuthorityAuditReportRequest:
    headers: CreateCertificateAuthorityAuditReportHeaders = field()
    request: shared.CreateCertificateAuthorityAuditReportRequest = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateCertificateAuthorityAuditReportResponse:
    content_type: str = field()
    status_code: int = field()
    create_certificate_authority_audit_report_response: Optional[shared.CreateCertificateAuthorityAuditReportResponse] = field(default=None)
    invalid_args_exception: Optional[Any] = field(default=None)
    invalid_arn_exception: Optional[Any] = field(default=None)
    invalid_state_exception: Optional[Any] = field(default=None)
    request_failed_exception: Optional[Any] = field(default=None)
    request_in_progress_exception: Optional[Any] = field(default=None)
    resource_not_found_exception: Optional[Any] = field(default=None)
    
