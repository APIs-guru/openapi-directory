from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from sdk.models import shared


@dataclass
class UpdateSourceDefinitionRequest:
    request: Optional[shared.SourceDefinitionUpdate] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateSourceDefinitionResponse:
    content_type: str = field()
    status_code: int = field()
    invalid_input_exception_info: Optional[shared.InvalidInputExceptionInfo] = field(default=None)
    not_found_known_exception_info: Optional[shared.NotFoundKnownExceptionInfo] = field(default=None)
    source_definition_read: Optional[shared.SourceDefinitionRead] = field(default=None)
    
