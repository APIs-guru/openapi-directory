from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from . import workspacedescription


@dataclass_json
@dataclass
class DescribeWorkspaceResponse:
    workspace: workspacedescription.WorkspaceDescription = field(default=None, metadata={'dataclasses_json': { 'field_name': 'workspace' }})
    
