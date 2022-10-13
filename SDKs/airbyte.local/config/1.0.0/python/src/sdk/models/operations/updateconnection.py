from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class UpdateConnectionRequest:
    request: shared.ConnectionUpdate = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateConnectionResponse:
    connection_read: Optional[shared.ConnectionRead] = field(default=None)
    content_type: str = field(default=None)
    invalid_input_exception_info: Optional[shared.InvalidInputExceptionInfo] = field(default=None)
    status_code: int = field(default=None)
    
