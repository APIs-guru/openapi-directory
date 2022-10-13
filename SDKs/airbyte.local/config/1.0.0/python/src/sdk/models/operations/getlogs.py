from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetLogsRequest:
    request: shared.LogsRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class GetLogsResponse:
    content_type: str = field(default=None)
    invalid_input_exception_info: Optional[shared.InvalidInputExceptionInfo] = field(default=None)
    not_found_known_exception_info: Optional[shared.NotFoundKnownExceptionInfo] = field(default=None)
    status_code: int = field(default=None)
    get_logs_200_text_plain_binary_string: Optional[bytes] = field(default=None)
    
