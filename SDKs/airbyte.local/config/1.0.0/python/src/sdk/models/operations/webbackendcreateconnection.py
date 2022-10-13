from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class WebBackendCreateConnectionRequest:
    request: shared.WebBackendConnectionCreate = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class WebBackendCreateConnectionResponse:
    content_type: str = field(default=None)
    invalid_input_exception_info: Optional[shared.InvalidInputExceptionInfo] = field(default=None)
    status_code: int = field(default=None)
    web_backend_connection_read: Optional[shared.WebBackendConnectionRead] = field(default=None)
    
