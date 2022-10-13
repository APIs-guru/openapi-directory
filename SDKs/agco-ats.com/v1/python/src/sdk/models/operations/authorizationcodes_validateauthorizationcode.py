from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class AuthorizationCodesValidateAuthorizationCodePathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class AuthorizationCodesValidateAuthorizationCodeRequest:
    path_params: AuthorizationCodesValidateAuthorizationCodePathParams = field(default=None)
    

@dataclass
class AuthorizationCodesValidateAuthorizationCodeResponse:
    api_models_api_error: Optional[shared.APIModelsAPIError] = field(default=None)
    authorization_codes_shared_models_code_validation_model: Optional[shared.AuthorizationCodesSharedModelsCodeValidationModel] = field(default=None)
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
