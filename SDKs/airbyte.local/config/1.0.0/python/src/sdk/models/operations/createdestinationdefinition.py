from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class CreateDestinationDefinitionRequest:
    request: Optional[shared.DestinationDefinitionCreate] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateDestinationDefinitionResponse:
    content_type: str = field()
    status_code: int = field()
    destination_definition_read: Optional[shared.DestinationDefinitionRead] = field(default=None)
    invalid_input_exception_info: Optional[shared.InvalidInputExceptionInfo] = field(default=None)
    
