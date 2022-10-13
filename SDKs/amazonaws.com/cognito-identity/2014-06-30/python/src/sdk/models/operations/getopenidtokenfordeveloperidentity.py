from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared

class GetOpenIDTokenForDeveloperIdentityXAmzTargetEnum(str, Enum):
    AWS_COGNITO_IDENTITY_SERVICE_GET_OPEN_ID_TOKEN_FOR_DEVELOPER_IDENTITY = "AWSCognitoIdentityService.GetOpenIdTokenForDeveloperIdentity"


@dataclass
class GetOpenIDTokenForDeveloperIdentityHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    x_amz_target: GetOpenIDTokenForDeveloperIdentityXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target' }})
    

@dataclass
class GetOpenIDTokenForDeveloperIdentityRequest:
    headers: GetOpenIDTokenForDeveloperIdentityHeaders = field(default=None)
    request: shared.GetOpenIDTokenForDeveloperIdentityInput = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class GetOpenIDTokenForDeveloperIdentityResponse:
    content_type: str = field(default=None)
    developer_user_already_registered_exception: Optional[Any] = field(default=None)
    get_open_id_token_for_developer_identity_response: Optional[shared.GetOpenIDTokenForDeveloperIdentityResponse] = field(default=None)
    internal_error_exception: Optional[Any] = field(default=None)
    invalid_parameter_exception: Optional[Any] = field(default=None)
    not_authorized_exception: Optional[Any] = field(default=None)
    resource_conflict_exception: Optional[Any] = field(default=None)
    resource_not_found_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    too_many_requests_exception: Optional[Any] = field(default=None)
    
