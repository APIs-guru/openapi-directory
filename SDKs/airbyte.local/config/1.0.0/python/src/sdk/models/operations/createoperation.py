from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class CreateOperationRequest:
    request: shared.OperationCreate = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateOperationResponse:
    content_type: str = field(default=None)
    invalid_input_exception_info: Optional[shared.InvalidInputExceptionInfo] = field(default=None)
    operation_read: Optional[shared.OperationRead] = field(default=None)
    status_code: int = field(default=None)
    
