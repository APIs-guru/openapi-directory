from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from sdk.models import shared


@dataclass
class UpdateDestinationRequest:
    request: shared.DestinationUpdate = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateDestinationResponse:
    content_type: str = field()
    status_code: int = field()
    destination_read: Optional[shared.DestinationRead] = field(default=None)
    invalid_input_exception_info: Optional[shared.InvalidInputExceptionInfo] = field(default=None)
    
