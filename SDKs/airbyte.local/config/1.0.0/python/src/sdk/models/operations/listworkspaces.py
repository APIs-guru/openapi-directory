from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class ListWorkspacesResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    workspace_read_list: Optional[shared.WorkspaceReadList] = field(default=None)
    
