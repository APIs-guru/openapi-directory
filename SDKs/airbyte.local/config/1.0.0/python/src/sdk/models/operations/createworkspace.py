from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class CreateWorkspaceRequest:
    request: shared.WorkspaceCreate = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateWorkspaceResponse:
    content_type: str = field(default=None)
    invalid_input_exception_info: Optional[shared.InvalidInputExceptionInfo] = field(default=None)
    status_code: int = field(default=None)
    workspace_read: Optional[shared.WorkspaceRead] = field(default=None)
    
