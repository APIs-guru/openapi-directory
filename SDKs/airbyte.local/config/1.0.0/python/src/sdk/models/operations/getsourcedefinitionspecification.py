from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetSourceDefinitionSpecificationRequest:
    request: shared.SourceDefinitionIDRequestBody = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class GetSourceDefinitionSpecificationResponse:
    content_type: str = field()
    status_code: int = field()
    invalid_input_exception_info: Optional[shared.InvalidInputExceptionInfo] = field(default=None)
    not_found_known_exception_info: Optional[shared.NotFoundKnownExceptionInfo] = field(default=None)
    source_definition_specification_read: Optional[shared.SourceDefinitionSpecificationRead] = field(default=None)
    
