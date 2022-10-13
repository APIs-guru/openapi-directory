from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import workspacestatus


@dataclass_json
@dataclass
class CreateWorkspaceResponse:
    arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'arn' }})
    status: workspacestatus.WorkspaceStatus = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    tags: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tags' }})
    workspace_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'workspaceId' }})
    
