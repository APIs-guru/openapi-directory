from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class AuthenticationRequestPasswordResetRequests:
    api_models_password_reset_request: Optional[shared.APIModelsPasswordResetRequest] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    api_models_password_reset_request1: Optional[shared.APIModelsPasswordResetRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    api_models_password_reset_request2: Optional[shared.APIModelsPasswordResetRequest] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    application_xml: bytes = field(default=None, metadata={'request': { 'media_type': 'application/xml' }})
    text_xml: bytes = field(default=None, metadata={'request': { 'media_type': 'text/xml' }})
    

@dataclass
class AuthenticationRequestPasswordResetRequest:
    request: AuthenticationRequestPasswordResetRequests = field(default=None)
    

@dataclass
class AuthenticationRequestPasswordResetResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
