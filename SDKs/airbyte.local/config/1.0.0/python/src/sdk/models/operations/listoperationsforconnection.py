from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class ListOperationsForConnectionRequest:
    request: shared.ConnectionIDRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class ListOperationsForConnectionResponse:
    content_type: str = field(default=None)
    invalid_input_exception_info: Optional[shared.InvalidInputExceptionInfo] = field(default=None)
    not_found_known_exception_info: Optional[shared.NotFoundKnownExceptionInfo] = field(default=None)
    operation_read_list: Optional[shared.OperationReadList] = field(default=None)
    status_code: int = field(default=None)
    
