from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class CreateOperationRequest:
    request: shared.OperationCreate = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateOperationResponse:
    content_type: str = field()
    status_code: int = field()
    invalid_input_exception_info: Optional[shared.InvalidInputExceptionInfo] = field(default=None)
    operation_read: Optional[shared.OperationRead] = field(default=None)
    
