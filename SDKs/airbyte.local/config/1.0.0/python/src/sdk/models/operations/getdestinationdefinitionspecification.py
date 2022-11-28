from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetDestinationDefinitionSpecificationRequest:
    request: shared.DestinationDefinitionIDRequestBody = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class GetDestinationDefinitionSpecificationResponse:
    content_type: str = field()
    status_code: int = field()
    destination_definition_specification_read: Optional[shared.DestinationDefinitionSpecificationRead] = field(default=None)
    invalid_input_exception_info: Optional[shared.InvalidInputExceptionInfo] = field(default=None)
    not_found_known_exception_info: Optional[shared.NotFoundKnownExceptionInfo] = field(default=None)
    
