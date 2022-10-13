from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class SyncConnectionRequest:
    request: shared.ConnectionIDRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class SyncConnectionResponse:
    content_type: str = field(default=None)
    invalid_input_exception_info: Optional[shared.InvalidInputExceptionInfo] = field(default=None)
    job_info_read: Optional[shared.JobInfoRead] = field(default=None)
    not_found_known_exception_info: Optional[shared.NotFoundKnownExceptionInfo] = field(default=None)
    status_code: int = field(default=None)
    
