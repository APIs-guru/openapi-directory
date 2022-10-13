from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class AuthorizationCodesGetContactInformationPathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class AuthorizationCodesGetContactInformationRequest:
    path_params: AuthorizationCodesGetContactInformationPathParams = field(default=None)
    

@dataclass
class AuthorizationCodesGetContactInformationResponse:
    api_models_api_error: Optional[shared.APIModelsAPIError] = field(default=None)
    authorization_codes_shared_models_authorization_contact_information: Optional[shared.AuthorizationCodesSharedModelsAuthorizationContactInformation] = field(default=None)
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
