from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class CreateCertificateFromCsrQueryParams:
    set_as_active: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'setAsActive', 'style': 'form', 'explode': True }})
    

@dataclass
class CreateCertificateFromCsrHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class CreateCertificateFromCsrRequestBody:
    certificate_signing_request: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('certificateSigningRequest') }})
    

@dataclass
class CreateCertificateFromCsrRequest:
    headers: CreateCertificateFromCsrHeaders = field()
    query_params: CreateCertificateFromCsrQueryParams = field()
    request: CreateCertificateFromCsrRequestBody = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateCertificateFromCsrResponse:
    content_type: str = field()
    status_code: int = field()
    create_certificate_from_csr_response: Optional[shared.CreateCertificateFromCsrResponse] = field(default=None)
    internal_failure_exception: Optional[Any] = field(default=None)
    invalid_request_exception: Optional[Any] = field(default=None)
    service_unavailable_exception: Optional[Any] = field(default=None)
    throttling_exception: Optional[Any] = field(default=None)
    unauthorized_exception: Optional[Any] = field(default=None)
    
