from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class AuthenticationDefaultRequests:
    api_models_credentials: Optional[shared.APIModelsCredentials] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    api_models_credentials1: Optional[shared.APIModelsCredentials] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    api_models_credentials2: Optional[shared.APIModelsCredentials] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    application_xml: bytes = field(default=None, metadata={'request': { 'media_type': 'application/xml' }})
    text_xml: bytes = field(default=None, metadata={'request': { 'media_type': 'text/xml' }})
    

@dataclass
class AuthenticationDefaultRequest:
    request: AuthenticationDefaultRequests = field(default=None)
    

@dataclass
class AuthenticationDefaultResponse:
    api_models_authenticated_user: Optional[shared.APIModelsAuthenticatedUser] = field(default=None)
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
