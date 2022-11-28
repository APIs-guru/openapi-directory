from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ListWorkspacesResponse:
    content_type: str = field()
    status_code: int = field()
    workspace_read_list: Optional[shared.WorkspaceReadList] = field(default=None)
    
