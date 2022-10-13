from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class UpdateWorkspaceRequest:
    request: shared.WorkspaceUpdate = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateWorkspaceResponse:
    content_type: str = field(default=None)
    invalid_input_exception_info: Optional[shared.InvalidInputExceptionInfo] = field(default=None)
    not_found_known_exception_info: Optional[shared.NotFoundKnownExceptionInfo] = field(default=None)
    status_code: int = field(default=None)
    workspace_read: Optional[shared.WorkspaceRead] = field(default=None)
    
