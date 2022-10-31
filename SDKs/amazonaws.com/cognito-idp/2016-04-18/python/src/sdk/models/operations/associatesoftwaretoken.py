from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared

class AssociateSoftwareTokenXAmzTargetEnum(str, Enum):
    AWS_COGNITO_IDENTITY_PROVIDER_SERVICE_ASSOCIATE_SOFTWARE_TOKEN = "AWSCognitoIdentityProviderService.AssociateSoftwareToken"


@dataclass
class AssociateSoftwareTokenHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    x_amz_target: AssociateSoftwareTokenXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    

@dataclass
class AssociateSoftwareTokenRequest:
    headers: AssociateSoftwareTokenHeaders = field(default=None)
    request: shared.AssociateSoftwareTokenRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class AssociateSoftwareTokenResponse:
    associate_software_token_response: Optional[shared.AssociateSoftwareTokenResponse] = field(default=None)
    concurrent_modification_exception: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    internal_error_exception: Optional[Any] = field(default=None)
    invalid_parameter_exception: Optional[Any] = field(default=None)
    not_authorized_exception: Optional[Any] = field(default=None)
    resource_not_found_exception: Optional[Any] = field(default=None)
    software_token_mfa_not_found_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
