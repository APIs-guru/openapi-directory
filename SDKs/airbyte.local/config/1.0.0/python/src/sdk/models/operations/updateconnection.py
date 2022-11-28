from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from sdk.models import shared


@dataclass
class UpdateConnectionRequest:
    request: shared.ConnectionUpdate = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateConnectionResponse:
    content_type: str = field()
    status_code: int = field()
    connection_read: Optional[shared.ConnectionRead] = field(default=None)
    invalid_input_exception_info: Optional[shared.InvalidInputExceptionInfo] = field(default=None)
    
