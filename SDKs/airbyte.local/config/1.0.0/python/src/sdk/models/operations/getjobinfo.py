from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetJobInfoRequest:
    request: shared.JobIDRequestBody = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class GetJobInfoResponse:
    content_type: str = field()
    status_code: int = field()
    invalid_input_exception_info: Optional[shared.InvalidInputExceptionInfo] = field(default=None)
    job_info_read: Optional[shared.JobInfoRead] = field(default=None)
    not_found_known_exception_info: Optional[shared.NotFoundKnownExceptionInfo] = field(default=None)
    
