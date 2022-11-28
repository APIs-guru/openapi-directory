from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class WebBackendRecreateSourceRequest:
    request: shared.SourceRecreate = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class WebBackendRecreateSourceResponse:
    content_type: str = field()
    status_code: int = field()
    invalid_input_exception_info: Optional[shared.InvalidInputExceptionInfo] = field(default=None)
    source_read: Optional[shared.SourceRead] = field(default=None)
    
