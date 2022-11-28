from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class WebBackendCreateConnectionRequest:
    request: shared.WebBackendConnectionCreate = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class WebBackendCreateConnectionResponse:
    content_type: str = field()
    status_code: int = field()
    invalid_input_exception_info: Optional[shared.InvalidInputExceptionInfo] = field(default=None)
    web_backend_connection_read: Optional[shared.WebBackendConnectionRead] = field(default=None)
    
