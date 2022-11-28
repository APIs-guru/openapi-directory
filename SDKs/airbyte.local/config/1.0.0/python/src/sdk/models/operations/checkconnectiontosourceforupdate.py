from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from sdk.models import shared


@dataclass
class CheckConnectionToSourceForUpdateRequest:
    request: shared.SourceUpdate = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CheckConnectionToSourceForUpdateResponse:
    content_type: str = field()
    status_code: int = field()
    check_connection_read: Optional[shared.CheckConnectionRead] = field(default=None)
    invalid_input_exception_info: Optional[shared.InvalidInputExceptionInfo] = field(default=None)
    not_found_known_exception_info: Optional[shared.NotFoundKnownExceptionInfo] = field(default=None)
    
