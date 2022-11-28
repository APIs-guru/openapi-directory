from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class RegisterCertificateWithoutCaHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    
class RegisterCertificateWithoutCaRequestBodyStatusEnum(str, Enum):
    ACTIVE = "ACTIVE"
    INACTIVE = "INACTIVE"
    REVOKED = "REVOKED"
    PENDING_TRANSFER = "PENDING_TRANSFER"
    REGISTER_INACTIVE = "REGISTER_INACTIVE"
    PENDING_ACTIVATION = "PENDING_ACTIVATION"


@dataclass_json
@dataclass
class RegisterCertificateWithoutCaRequestBody:
    certificate_pem: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('certificatePem') }})
    status: Optional[RegisterCertificateWithoutCaRequestBodyStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    

@dataclass
class RegisterCertificateWithoutCaRequest:
    headers: RegisterCertificateWithoutCaHeaders = field()
    request: RegisterCertificateWithoutCaRequestBody = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class RegisterCertificateWithoutCaResponse:
    content_type: str = field()
    status_code: int = field()
    certificate_state_exception: Optional[Any] = field(default=None)
    certificate_validation_exception: Optional[Any] = field(default=None)
    internal_failure_exception: Optional[Any] = field(default=None)
    invalid_request_exception: Optional[Any] = field(default=None)
    register_certificate_without_ca_response: Optional[shared.RegisterCertificateWithoutCaResponse] = field(default=None)
    resource_already_exists_exception: Optional[Any] = field(default=None)
    service_unavailable_exception: Optional[Any] = field(default=None)
    throttling_exception: Optional[Any] = field(default=None)
    unauthorized_exception: Optional[Any] = field(default=None)
    
