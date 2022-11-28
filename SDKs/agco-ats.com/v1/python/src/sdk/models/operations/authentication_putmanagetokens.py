from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class AuthenticationPutManageTokensPathParams:
    user_id: int = field(metadata={'path_param': { 'field_name': 'UserID', 'style': 'simple', 'explode': False }})
    

@dataclass
class AuthenticationPutManageTokensRequests:
    application_xml: bytes = field(metadata={'request': { 'media_type': 'application/xml' }})
    text_xml: bytes = field(metadata={'request': { 'media_type': 'text/xml' }})
    api_models_token_options: Optional[shared.APIModelsTokenOptions] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    api_models_token_options1: Optional[shared.APIModelsTokenOptions] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    api_models_token_options2: Optional[shared.APIModelsTokenOptions] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclass
class AuthenticationPutManageTokensRequest:
    path_params: AuthenticationPutManageTokensPathParams = field()
    request: AuthenticationPutManageTokensRequests = field()
    

@dataclass
class AuthenticationPutManageTokensResponse:
    content_type: str = field()
    status_code: int = field()
    
