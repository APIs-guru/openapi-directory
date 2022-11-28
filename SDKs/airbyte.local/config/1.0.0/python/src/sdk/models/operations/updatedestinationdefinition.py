from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from sdk.models import shared


@dataclass
class UpdateDestinationDefinitionRequest:
    request: shared.DestinationDefinitionUpdate = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateDestinationDefinitionResponse:
    content_type: str = field()
    status_code: int = field()
    destination_definition_read: Optional[shared.DestinationDefinitionRead] = field(default=None)
    invalid_input_exception_info: Optional[shared.InvalidInputExceptionInfo] = field(default=None)
    not_found_known_exception_info: Optional[shared.NotFoundKnownExceptionInfo] = field(default=None)
    
