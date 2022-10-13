from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import projectvisibilitytype_enum


@dataclass_json
@dataclass
class UpdateProjectVisibilityOutput:
    project_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'projectArn' }})
    project_visibility: Optional[projectvisibilitytype_enum.ProjectVisibilityTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'projectVisibility' }})
    public_project_alias: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'publicProjectAlias' }})
    
