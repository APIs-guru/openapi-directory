from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ListSourcesForWorkspaceRequest:
    request: shared.WorkspaceIDRequestBody = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class ListSourcesForWorkspaceResponse:
    content_type: str = field()
    status_code: int = field()
    invalid_input_exception_info: Optional[shared.InvalidInputExceptionInfo] = field(default=None)
    not_found_known_exception_info: Optional[shared.NotFoundKnownExceptionInfo] = field(default=None)
    source_read_list: Optional[shared.SourceReadList] = field(default=None)
    
