from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class CreateDestinationRequest:
    request: shared.DestinationCreate = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateDestinationResponse:
    content_type: str = field()
    status_code: int = field()
    destination_read: Optional[shared.DestinationRead] = field(default=None)
    invalid_input_exception_info: Optional[shared.InvalidInputExceptionInfo] = field(default=None)
    
