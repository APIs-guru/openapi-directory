from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class AuthenticationResetPaswordRequests:
    application_xml: bytes = field(metadata={'request': { 'media_type': 'application/xml' }})
    text_xml: bytes = field(metadata={'request': { 'media_type': 'text/xml' }})
    api_models_password_reset: Optional[shared.APIModelsPasswordReset] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    api_models_password_reset1: Optional[shared.APIModelsPasswordReset] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    api_models_password_reset2: Optional[shared.APIModelsPasswordReset] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclass
class AuthenticationResetPaswordRequest:
    request: AuthenticationResetPaswordRequests = field()
    

@dataclass
class AuthenticationResetPaswordResponse:
    content_type: str = field()
    status_code: int = field()
    
