from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from sdk.models import shared

class ConfirmDeviceXAmzTargetEnum(str, Enum):
    AWS_COGNITO_IDENTITY_PROVIDER_SERVICE_CONFIRM_DEVICE = "AWSCognitoIdentityProviderService.ConfirmDevice"


@dataclass
class ConfirmDeviceHeaders:
    x_amz_target: ConfirmDeviceXAmzTargetEnum = field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class ConfirmDeviceRequest:
    headers: ConfirmDeviceHeaders = field()
    request: shared.ConfirmDeviceRequest = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class ConfirmDeviceResponse:
    content_type: str = field()
    status_code: int = field()
    confirm_device_response: Optional[shared.ConfirmDeviceResponse] = field(default=None)
    internal_error_exception: Optional[Any] = field(default=None)
    invalid_lambda_response_exception: Optional[Any] = field(default=None)
    invalid_parameter_exception: Optional[Any] = field(default=None)
    invalid_password_exception: Optional[Any] = field(default=None)
    invalid_user_pool_configuration_exception: Optional[Any] = field(default=None)
    not_authorized_exception: Optional[Any] = field(default=None)
    password_reset_required_exception: Optional[Any] = field(default=None)
    resource_not_found_exception: Optional[Any] = field(default=None)
    too_many_requests_exception: Optional[Any] = field(default=None)
    user_not_confirmed_exception: Optional[Any] = field(default=None)
    user_not_found_exception: Optional[Any] = field(default=None)
    username_exists_exception: Optional[Any] = field(default=None)
    
