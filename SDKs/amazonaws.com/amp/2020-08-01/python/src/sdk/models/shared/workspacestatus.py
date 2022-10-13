from dataclasses import dataclass, field
from typing import Enum
from dataclasses_json import dataclass_json
from . import workspacestatuscode_enum


@dataclass_json
@dataclass
class WorkspaceStatus:
    status_code: workspacestatuscode_enum.WorkspaceStatusCodeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'statusCode' }})
    
