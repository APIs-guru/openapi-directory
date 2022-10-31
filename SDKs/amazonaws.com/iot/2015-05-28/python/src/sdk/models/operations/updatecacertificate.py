from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from dataclasses_json import dataclass_json


@dataclass
class UpdateCaCertificatePathParams:
    ca_certificate_id: str = field(default=None, metadata={'path_param': { 'field_name': 'caCertificateId', 'style': 'simple', 'explode': False }})
    
class UpdateCaCertificateNewAutoRegistrationStatusEnum(str, Enum):
    ENABLE = "ENABLE"
    DISABLE = "DISABLE"

class UpdateCaCertificateNewStatusEnum(str, Enum):
    ACTIVE = "ACTIVE"
    INACTIVE = "INACTIVE"


@dataclass
class UpdateCaCertificateQueryParams:
    new_auto_registration_status: Optional[UpdateCaCertificateNewAutoRegistrationStatusEnum] = field(default=None, metadata={'query_param': { 'field_name': 'newAutoRegistrationStatus', 'style': 'form', 'explode': True }})
    new_status: Optional[UpdateCaCertificateNewStatusEnum] = field(default=None, metadata={'query_param': { 'field_name': 'newStatus', 'style': 'form', 'explode': True }})
    

@dataclass
class UpdateCaCertificateHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class UpdateCaCertificateRequestBodyRegistrationConfig:
    role_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'roleArn' }})
    template_body: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'templateBody' }})
    

@dataclass_json
@dataclass
class UpdateCaCertificateRequestBody:
    registration_config: Optional[UpdateCaCertificateRequestBodyRegistrationConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'registrationConfig' }})
    remove_auto_registration: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'removeAutoRegistration' }})
    

@dataclass
class UpdateCaCertificateRequest:
    path_params: UpdateCaCertificatePathParams = field(default=None)
    query_params: UpdateCaCertificateQueryParams = field(default=None)
    headers: UpdateCaCertificateHeaders = field(default=None)
    request: UpdateCaCertificateRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateCaCertificateResponse:
    content_type: str = field(default=None)
    internal_failure_exception: Optional[Any] = field(default=None)
    invalid_request_exception: Optional[Any] = field(default=None)
    resource_not_found_exception: Optional[Any] = field(default=None)
    service_unavailable_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    throttling_exception: Optional[Any] = field(default=None)
    unauthorized_exception: Optional[Any] = field(default=None)
    
