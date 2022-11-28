from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from sdk.models import shared


@dataclass
class WebBackendUpdateConnectionRequest:
    request: shared.WebBackendConnectionUpdate = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class WebBackendUpdateConnectionResponse:
    content_type: str = field()
    status_code: int = field()
    invalid_input_exception_info: Optional[shared.InvalidInputExceptionInfo] = field(default=None)
    web_backend_connection_read: Optional[shared.WebBackendConnectionRead] = field(default=None)
    
