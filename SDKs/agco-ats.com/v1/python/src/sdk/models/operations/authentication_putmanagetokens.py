from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class AuthenticationPutManageTokensPathParams:
    user_id: int = field(default=None, metadata={'path_param': { 'field_name': 'UserID', 'style': 'simple', 'explode': False }})
    

@dataclass
class AuthenticationPutManageTokensRequests:
    api_models_token_options: Optional[shared.APIModelsTokenOptions] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    api_models_token_options1: Optional[shared.APIModelsTokenOptions] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    api_models_token_options2: Optional[shared.APIModelsTokenOptions] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    application_xml: bytes = field(default=None, metadata={'request': { 'media_type': 'application/xml' }})
    text_xml: bytes = field(default=None, metadata={'request': { 'media_type': 'text/xml' }})
    

@dataclass
class AuthenticationPutManageTokensRequest:
    path_params: AuthenticationPutManageTokensPathParams = field(default=None)
    request: AuthenticationPutManageTokensRequests = field(default=None)
    

@dataclass
class AuthenticationPutManageTokensResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
