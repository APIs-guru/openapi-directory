from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetLogsRequest:
    request: shared.LogsRequestBody = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class GetLogsResponse:
    content_type: str = field()
    status_code: int = field()
    invalid_input_exception_info: Optional[shared.InvalidInputExceptionInfo] = field(default=None)
    not_found_known_exception_info: Optional[shared.NotFoundKnownExceptionInfo] = field(default=None)
    get_logs_200_text_plain_binary_string: Optional[bytes] = field(default=None)
    
