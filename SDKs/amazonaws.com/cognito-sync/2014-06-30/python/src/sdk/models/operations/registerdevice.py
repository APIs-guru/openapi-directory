from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class RegisterDevicePathParams:
    identity_id: str = field(default=None, metadata={'path_param': { 'field_name': 'IdentityId', 'style': 'simple', 'explode': False }})
    identity_pool_id: str = field(default=None, metadata={'path_param': { 'field_name': 'IdentityPoolId', 'style': 'simple', 'explode': False }})
    

@dataclass
class RegisterDeviceHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    
class RegisterDeviceRequestBodyPlatformEnum(str, Enum):
    APNS = "APNS"
    APNS_SANDBOX = "APNS_SANDBOX"
    GCM = "GCM"
    ADM = "ADM"


@dataclass_json
@dataclass
class RegisterDeviceRequestBody:
    platform: RegisterDeviceRequestBodyPlatformEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Platform' }})
    token: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Token' }})
    

@dataclass
class RegisterDeviceRequest:
    path_params: RegisterDevicePathParams = field(default=None)
    headers: RegisterDeviceHeaders = field(default=None)
    request: RegisterDeviceRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class RegisterDeviceResponse:
    content_type: str = field(default=None)
    internal_error_exception: Optional[Any] = field(default=None)
    invalid_configuration_exception: Optional[Any] = field(default=None)
    invalid_parameter_exception: Optional[Any] = field(default=None)
    not_authorized_exception: Optional[Any] = field(default=None)
    register_device_response: Optional[shared.RegisterDeviceResponse] = field(default=None)
    resource_not_found_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    too_many_requests_exception: Optional[Any] = field(default=None)
    
