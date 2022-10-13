from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class AuthenticationResetPaswordRequests:
    api_models_password_reset: Optional[shared.APIModelsPasswordReset] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    api_models_password_reset1: Optional[shared.APIModelsPasswordReset] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    api_models_password_reset2: Optional[shared.APIModelsPasswordReset] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    application_xml: bytes = field(default=None, metadata={'request': { 'media_type': 'application/xml' }})
    text_xml: bytes = field(default=None, metadata={'request': { 'media_type': 'text/xml' }})
    

@dataclass
class AuthenticationResetPaswordRequest:
    request: AuthenticationResetPaswordRequests = field(default=None)
    

@dataclass
class AuthenticationResetPaswordResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
