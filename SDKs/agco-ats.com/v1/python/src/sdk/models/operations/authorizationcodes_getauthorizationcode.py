from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class AuthorizationCodesGetAuthorizationCodePathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class AuthorizationCodesGetAuthorizationCodeRequest:
    path_params: AuthorizationCodesGetAuthorizationCodePathParams = field(default=None)
    

@dataclass
class AuthorizationCodesGetAuthorizationCodeResponse:
    api_models_api_error: Optional[shared.APIModelsAPIError] = field(default=None)
    authorization_codes_shared_models_authorization_code: Optional[shared.AuthorizationCodesSharedModelsAuthorizationCode] = field(default=None)
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
