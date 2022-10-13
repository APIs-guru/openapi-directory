from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class WebBackendRecreateSourceRequest:
    request: shared.SourceRecreate = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class WebBackendRecreateSourceResponse:
    content_type: str = field(default=None)
    invalid_input_exception_info: Optional[shared.InvalidInputExceptionInfo] = field(default=None)
    source_read: Optional[shared.SourceRead] = field(default=None)
    status_code: int = field(default=None)
    
