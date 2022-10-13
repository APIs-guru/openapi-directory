from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared

class ConfirmForgotPasswordXAmzTargetEnum(str, Enum):
    AWS_COGNITO_IDENTITY_PROVIDER_SERVICE_CONFIRM_FORGOT_PASSWORD = "AWSCognitoIdentityProviderService.ConfirmForgotPassword"


@dataclass
class ConfirmForgotPasswordHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    x_amz_target: ConfirmForgotPasswordXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target' }})
    

@dataclass
class ConfirmForgotPasswordRequest:
    headers: ConfirmForgotPasswordHeaders = field(default=None)
    request: shared.ConfirmForgotPasswordRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class ConfirmForgotPasswordResponse:
    code_mismatch_exception: Optional[Any] = field(default=None)
    confirm_forgot_password_response: Optional[dict[str, Any]] = field(default=None)
    content_type: str = field(default=None)
    expired_code_exception: Optional[Any] = field(default=None)
    internal_error_exception: Optional[Any] = field(default=None)
    invalid_lambda_response_exception: Optional[Any] = field(default=None)
    invalid_parameter_exception: Optional[Any] = field(default=None)
    invalid_password_exception: Optional[Any] = field(default=None)
    limit_exceeded_exception: Optional[Any] = field(default=None)
    not_authorized_exception: Optional[Any] = field(default=None)
    resource_not_found_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    too_many_failed_attempts_exception: Optional[Any] = field(default=None)
    too_many_requests_exception: Optional[Any] = field(default=None)
    unexpected_lambda_exception: Optional[Any] = field(default=None)
    user_lambda_validation_exception: Optional[Any] = field(default=None)
    user_not_confirmed_exception: Optional[Any] = field(default=None)
    user_not_found_exception: Optional[Any] = field(default=None)
    
