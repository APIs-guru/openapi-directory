from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from sdk.models import shared

class SignUpXAmzTargetEnum(str, Enum):
    AWS_COGNITO_IDENTITY_PROVIDER_SERVICE_SIGN_UP = "AWSCognitoIdentityProviderService.SignUp"


@dataclass
class SignUpHeaders:
    x_amz_target: SignUpXAmzTargetEnum = field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class SignUpRequest:
    headers: SignUpHeaders = field()
    request: shared.SignUpRequest = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class SignUpResponse:
    content_type: str = field()
    status_code: int = field()
    code_delivery_failure_exception: Optional[Any] = field(default=None)
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
    too_many_requests_exception: Optional[Any] = field(default=None)
    unexpected_lambda_exception: Optional[Any] = field(default=None)
    user_lambda_validation_exception: Optional[Any] = field(default=None)
    username_exists_exception: Optional[Any] = field(default=None)
    
