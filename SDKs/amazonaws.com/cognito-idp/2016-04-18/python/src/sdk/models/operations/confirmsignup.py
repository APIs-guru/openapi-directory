from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared

class ConfirmSignUpXAmzTargetEnum(str, Enum):
    AWS_COGNITO_IDENTITY_PROVIDER_SERVICE_CONFIRM_SIGN_UP = "AWSCognitoIdentityProviderService.ConfirmSignUp"


@dataclass
class ConfirmSignUpHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    x_amz_target: ConfirmSignUpXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    

@dataclass
class ConfirmSignUpRequest:
    headers: ConfirmSignUpHeaders = field(default=None)
    request: shared.ConfirmSignUpRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class ConfirmSignUpResponse:
    alias_exists_exception: Optional[Any] = field(default=None)
    code_mismatch_exception: Optional[Any] = field(default=None)
    confirm_sign_up_response: Optional[dict[str, Any]] = field(default=None)
    content_type: str = field(default=None)
    expired_code_exception: Optional[Any] = field(default=None)
    internal_error_exception: Optional[Any] = field(default=None)
    invalid_lambda_response_exception: Optional[Any] = field(default=None)
    invalid_parameter_exception: Optional[Any] = field(default=None)
    limit_exceeded_exception: Optional[Any] = field(default=None)
    not_authorized_exception: Optional[Any] = field(default=None)
    resource_not_found_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    too_many_failed_attempts_exception: Optional[Any] = field(default=None)
    too_many_requests_exception: Optional[Any] = field(default=None)
    unexpected_lambda_exception: Optional[Any] = field(default=None)
    user_lambda_validation_exception: Optional[Any] = field(default=None)
    user_not_found_exception: Optional[Any] = field(default=None)
    
