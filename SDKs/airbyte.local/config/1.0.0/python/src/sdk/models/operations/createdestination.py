from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class CreateDestinationRequest:
    request: shared.DestinationCreate = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateDestinationResponse:
    content_type: str = field(default=None)
    destination_read: Optional[shared.DestinationRead] = field(default=None)
    invalid_input_exception_info: Optional[shared.InvalidInputExceptionInfo] = field(default=None)
    status_code: int = field(default=None)
    
