from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class AuthenticationRequestPasswordResetRequests:
    application_xml: bytes = field(metadata={'request': { 'media_type': 'application/xml' }})
    text_xml: bytes = field(metadata={'request': { 'media_type': 'text/xml' }})
    api_models_password_reset_request: Optional[shared.APIModelsPasswordResetRequest] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    api_models_password_reset_request1: Optional[shared.APIModelsPasswordResetRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    api_models_password_reset_request2: Optional[shared.APIModelsPasswordResetRequest] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclass
class AuthenticationRequestPasswordResetRequest:
    request: AuthenticationRequestPasswordResetRequests = field()
    

@dataclass
class AuthenticationRequestPasswordResetResponse:
    content_type: str = field()
    status_code: int = field()
    
