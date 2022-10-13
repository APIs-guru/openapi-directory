from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from . import workspaceread


@dataclass_json
@dataclass
class WorkspaceReadList:
    workspaces: List[workspaceread.WorkspaceRead] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'workspaces' }})
    
