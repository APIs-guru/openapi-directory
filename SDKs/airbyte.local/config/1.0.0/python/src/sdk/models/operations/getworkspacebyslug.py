from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetWorkspaceBySlugRequest:
    request: shared.SlugRequestBody = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class GetWorkspaceBySlugResponse:
    content_type: str = field()
    status_code: int = field()
    invalid_input_exception_info: Optional[shared.InvalidInputExceptionInfo] = field(default=None)
    not_found_known_exception_info: Optional[shared.NotFoundKnownExceptionInfo] = field(default=None)
    workspace_read: Optional[shared.WorkspaceRead] = field(default=None)
    
