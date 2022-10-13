from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import projectvisibilitytype_enum


@dataclass_json
@dataclass
class UpdateProjectVisibilityInput:
    project_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'projectArn' }})
    project_visibility: projectvisibilitytype_enum.ProjectVisibilityTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'projectVisibility' }})
    resource_access_role: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resourceAccessRole' }})
    
