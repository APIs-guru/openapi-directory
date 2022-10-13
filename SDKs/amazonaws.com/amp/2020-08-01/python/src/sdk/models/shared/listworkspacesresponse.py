from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import workspacesummary


@dataclass_json
@dataclass
class ListWorkspacesResponse:
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextToken' }})
    workspaces: List[workspacesummary.WorkspaceSummary] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'workspaces' }})
    
