from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetConnectionRequest:
    request: shared.ConnectionIDRequestBody = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class GetConnectionResponse:
    content_type: str = field()
    status_code: int = field()
    connection_read: Optional[shared.ConnectionRead] = field(default=None)
    invalid_input_exception_info: Optional[shared.InvalidInputExceptionInfo] = field(default=None)
    not_found_known_exception_info: Optional[shared.NotFoundKnownExceptionInfo] = field(default=None)
    
