from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class AuthenticationDefaultRequests:
    application_xml: bytes = field(metadata={'request': { 'media_type': 'application/xml' }})
    text_xml: bytes = field(metadata={'request': { 'media_type': 'text/xml' }})
    api_models_credentials: Optional[shared.APIModelsCredentials] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    api_models_credentials1: Optional[shared.APIModelsCredentials] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    api_models_credentials2: Optional[shared.APIModelsCredentials] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclass
class AuthenticationDefaultRequest:
    request: AuthenticationDefaultRequests = field()
    

@dataclass
class AuthenticationDefaultResponse:
    content_type: str = field()
    status_code: int = field()
    api_models_authenticated_user: Optional[shared.APIModelsAuthenticatedUser] = field(default=None)
    body: Optional[bytes] = field(default=None)
    
