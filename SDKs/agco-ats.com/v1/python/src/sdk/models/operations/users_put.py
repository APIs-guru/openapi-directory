from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class UsersPutPathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class UsersPutRequests:
    application_xml: bytes = field(metadata={'request': { 'media_type': 'application/xml' }})
    text_xml: bytes = field(metadata={'request': { 'media_type': 'text/xml' }})
    api_models_user: Optional[shared.APIModelsUser] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    api_models_user1: Optional[shared.APIModelsUser] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    api_models_user2: Optional[shared.APIModelsUser] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclass
class UsersPutRequest:
    path_params: UsersPutPathParams = field()
    request: UsersPutRequests = field()
    

@dataclass
class UsersPutResponse:
    content_type: str = field()
    status_code: int = field()
    
