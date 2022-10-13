from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ExecuteSourceDiscoverSchemaRequest:
    request: shared.SourceCoreConfig = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class ExecuteSourceDiscoverSchemaResponse:
    content_type: str = field(default=None)
    invalid_input_exception_info: Optional[shared.InvalidInputExceptionInfo] = field(default=None)
    source_discover_schema_read: Optional[shared.SourceDiscoverSchemaRead] = field(default=None)
    status_code: int = field(default=None)
    
