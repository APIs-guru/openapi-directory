from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from sdk.models import shared


@dataclass
class AuthorizationCodesValidateAuthorizationCodePathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class AuthorizationCodesValidateAuthorizationCodeRequest:
    path_params: AuthorizationCodesValidateAuthorizationCodePathParams = field()
    

@dataclass
class AuthorizationCodesValidateAuthorizationCodeResponse:
    content_type: str = field()
    status_code: int = field()
    api_models_api_error: Optional[shared.APIModelsAPIError] = field(default=None)
    authorization_codes_shared_models_code_validation_model: Optional[shared.AuthorizationCodesSharedModelsCodeValidationModel] = field(default=None)
    body: Optional[bytes] = field(default=None)
    
