from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class CheckOperationRequest:
    request: shared.OperatorConfiguration = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CheckOperationResponse:
    content_type: str = field()
    status_code: int = field()
    check_operation_read: Optional[shared.CheckOperationRead] = field(default=None)
    invalid_input_exception_info: Optional[shared.InvalidInputExceptionInfo] = field(default=None)
    
