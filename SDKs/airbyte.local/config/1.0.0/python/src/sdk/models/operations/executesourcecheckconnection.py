from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ExecuteSourceCheckConnectionRequest:
    request: shared.SourceCoreConfig = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class ExecuteSourceCheckConnectionResponse:
    content_type: str = field()
    status_code: int = field()
    check_connection_read: Optional[shared.CheckConnectionRead] = field(default=None)
    invalid_input_exception_info: Optional[shared.InvalidInputExceptionInfo] = field(default=None)
    
