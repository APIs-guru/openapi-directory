from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from sdk.models import shared


@dataclass
class UpdateOperationRequest:
    request: shared.OperationUpdate = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateOperationResponse:
    content_type: str = field()
    status_code: int = field()
    invalid_input_exception_info: Optional[shared.InvalidInputExceptionInfo] = field(default=None)
    operation_read: Optional[shared.OperationRead] = field(default=None)
    
