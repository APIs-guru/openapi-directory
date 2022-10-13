from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class CheckOperationRequest:
    request: shared.OperatorConfiguration = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CheckOperationResponse:
    check_operation_read: Optional[shared.CheckOperationRead] = field(default=None)
    content_type: str = field(default=None)
    invalid_input_exception_info: Optional[shared.InvalidInputExceptionInfo] = field(default=None)
    status_code: int = field(default=None)
    
