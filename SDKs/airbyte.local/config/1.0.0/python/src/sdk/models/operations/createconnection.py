from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class CreateConnectionRequest:
    request: shared.ConnectionCreate = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateConnectionResponse:
    content_type: str = field()
    status_code: int = field()
    connection_read: Optional[shared.ConnectionRead] = field(default=None)
    invalid_input_exception_info: Optional[shared.InvalidInputExceptionInfo] = field(default=None)
    
