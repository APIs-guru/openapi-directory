from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared

class SignUpXAmzTargetEnum(str, Enum):
    AWS_COGNITO_IDENTITY_PROVIDER_SERVICE_SIGN_UP = "AWSCognitoIdentityProviderService.SignUp"


@dataclass
class SignUpHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    x_amz_target: SignUpXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target' }})
    

@dataclass
class SignUpRequest:
    headers: SignUpHeaders = field(default=None)
    request: shared.SignUpRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class SignUpResponse:
    code_delivery_failure_exception: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    internal_error_exception: Optional[Any] = field(default=None)
    invalid_email_role_access_policy_exception: Optional[Any] = field(default=None)
    invalid_lambda_response_exception: Optional[Any] = field(default=None)
    invalid_parameter_exception: Optional[Any] = field(default=None)
    invalid_password_exception: Optional[Any] = field(default=None)
    invalid_sms_role_access_policy_exception: Optional[Any] = field(default=None)
    invalid_sms_role_trust_relationship_exception: Optional[Any] = field(default=None)
    not_authorized_exception: Optional[Any] = field(default=None)
    resource_not_found_exception: Optional[Any] = field(default=None)
    sign_up_response: Optional[shared.SignUpResponse] = field(default=None)
    status_code: int = field(default=None)
    too_many_requests_exception: Optional[Any] = field(default=None)
    unexpected_lambda_exception: Optional[Any] = field(default=None)
    user_lambda_validation_exception: Optional[Any] = field(default=None)
    username_exists_exception: Optional[Any] = field(default=None)
    
