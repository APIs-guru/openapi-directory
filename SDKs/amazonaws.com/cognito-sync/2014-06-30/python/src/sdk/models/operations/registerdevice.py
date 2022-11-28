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
class RegisterDevicePathParams:
    identity_id: str = field(metadata={'path_param': { 'field_name': 'IdentityId', 'style': 'simple', 'explode': False }})
    identity_pool_id: str = field(metadata={'path_param': { 'field_name': 'IdentityPoolId', 'style': 'simple', 'explode': False }})
    

@dataclass
class RegisterDeviceHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    
class RegisterDeviceRequestBodyPlatformEnum(str, Enum):
    APNS = "APNS"
    APNS_SANDBOX = "APNS_SANDBOX"
    GCM = "GCM"
    ADM = "ADM"


@dataclass_json
@dataclass
class RegisterDeviceRequestBody:
    platform: RegisterDeviceRequestBodyPlatformEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Platform') }})
    token: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Token') }})
    

@dataclass
class RegisterDeviceRequest:
    headers: RegisterDeviceHeaders = field()
    path_params: RegisterDevicePathParams = field()
    request: RegisterDeviceRequestBody = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class RegisterDeviceResponse:
    content_type: str = field()
    status_code: int = field()
    internal_error_exception: Optional[Any] = field(default=None)
    invalid_configuration_exception: Optional[Any] = field(default=None)
    invalid_parameter_exception: Optional[Any] = field(default=None)
    not_authorized_exception: Optional[Any] = field(default=None)
    register_device_response: Optional[shared.RegisterDeviceResponse] = field(default=None)
    resource_not_found_exception: Optional[Any] = field(default=None)
    too_many_requests_exception: Optional[Any] = field(default=None)
    
