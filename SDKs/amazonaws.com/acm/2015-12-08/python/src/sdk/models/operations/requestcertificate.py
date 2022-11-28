from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from sdk.models import shared

class RequestCertificateXAmzTargetEnum(str, Enum):
    CERTIFICATE_MANAGER_REQUEST_CERTIFICATE = "CertificateManager.RequestCertificate"


@dataclass
class RequestCertificateHeaders:
    x_amz_target: RequestCertificateXAmzTargetEnum = field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class RequestCertificateRequest:
    headers: RequestCertificateHeaders = field()
    request: shared.RequestCertificateRequest = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class RequestCertificateResponse:
    content_type: str = field()
    status_code: int = field()
    invalid_arn_exception: Optional[Any] = field(default=None)
    invalid_domain_validation_options_exception: Optional[Any] = field(default=None)
    invalid_parameter_exception: Optional[Any] = field(default=None)
    invalid_tag_exception: Optional[Any] = field(default=None)
    limit_exceeded_exception: Optional[Any] = field(default=None)
    request_certificate_response: Optional[shared.RequestCertificateResponse] = field(default=None)
    tag_policy_exception: Optional[Any] = field(default=None)
    too_many_tags_exception: Optional[Any] = field(default=None)
    
