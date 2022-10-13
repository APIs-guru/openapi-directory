from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class DiscoverSchemaForSourceRequest:
    request: shared.SourceIDRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class DiscoverSchemaForSourceResponse:
    content_type: str = field(default=None)
    invalid_input_exception_info: Optional[shared.InvalidInputExceptionInfo] = field(default=None)
    not_found_known_exception_info: Optional[shared.NotFoundKnownExceptionInfo] = field(default=None)
    source_discover_schema_read: Optional[shared.SourceDiscoverSchemaRead] = field(default=None)
    status_code: int = field(default=None)
    
