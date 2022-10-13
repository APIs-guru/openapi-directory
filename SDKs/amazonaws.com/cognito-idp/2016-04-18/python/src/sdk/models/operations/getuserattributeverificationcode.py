from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared

class GetUserAttributeVerificationCodeXAmzTargetEnum(str, Enum):
    AWS_COGNITO_IDENTITY_PROVIDER_SERVICE_GET_USER_ATTRIBUTE_VERIFICATION_CODE = "AWSCognitoIdentityProviderService.GetUserAttributeVerificationCode"


@dataclass
class GetUserAttributeVerificationCodeHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    x_amz_target: GetUserAttributeVerificationCodeXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target' }})
    

@dataclass
class GetUserAttributeVerificationCodeRequest:
    headers: GetUserAttributeVerificationCodeHeaders = field(default=None)
    request: shared.GetUserAttributeVerificationCodeRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class GetUserAttributeVerificationCodeResponse:
    code_delivery_failure_exception: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    get_user_attribute_verification_code_response: Optional[shared.GetUserAttributeVerificationCodeResponse] = field(default=None)
    internal_error_exception: Optional[Any] = field(default=None)
    invalid_email_role_access_policy_exception: Optional[Any] = field(default=None)
    invalid_lambda_response_exception: Optional[Any] = field(default=None)
    invalid_parameter_exception: Optional[Any] = field(default=None)
    invalid_sms_role_access_policy_exception: Optional[Any] = field(default=None)
    invalid_sms_role_trust_relationship_exception: Optional[Any] = field(default=None)
    limit_exceeded_exception: Optional[Any] = field(default=None)
    not_authorized_exception: Optional[Any] = field(default=None)
    password_reset_required_exception: Optional[Any] = field(default=None)
    resource_not_found_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    too_many_requests_exception: Optional[Any] = field(default=None)
    unexpected_lambda_exception: Optional[Any] = field(default=None)
    user_lambda_validation_exception: Optional[Any] = field(default=None)
    user_not_confirmed_exception: Optional[Any] = field(default=None)
    user_not_found_exception: Optional[Any] = field(default=None)
    
