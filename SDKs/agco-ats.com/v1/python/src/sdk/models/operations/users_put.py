from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class UsersPutPathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class UsersPutRequests:
    api_models_user: Optional[shared.APIModelsUser] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    api_models_user1: Optional[shared.APIModelsUser] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    api_models_user2: Optional[shared.APIModelsUser] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    application_xml: bytes = field(default=None, metadata={'request': { 'media_type': 'application/xml' }})
    text_xml: bytes = field(default=None, metadata={'request': { 'media_type': 'text/xml' }})
    

@dataclass
class UsersPutRequest:
    path_params: UsersPutPathParams = field(default=None)
    request: UsersPutRequests = field(default=None)
    

@dataclass
class UsersPutResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
