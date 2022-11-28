from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class UsersPostRequests:
    application_xml: bytes = field(metadata={'request': { 'media_type': 'application/xml' }})
    text_xml: bytes = field(metadata={'request': { 'media_type': 'text/xml' }})
    api_models_user: Optional[shared.APIModelsUser] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    api_models_user1: Optional[shared.APIModelsUser] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    api_models_user2: Optional[shared.APIModelsUser] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclass
class UsersPostRequest:
    request: UsersPostRequests = field()
    

@dataclass
class UsersPostResponse:
    content_type: str = field()
    status_code: int = field()
    api_models_user: Optional[shared.APIModelsUser] = field(default=None)
    body: Optional[bytes] = field(default=None)
    
