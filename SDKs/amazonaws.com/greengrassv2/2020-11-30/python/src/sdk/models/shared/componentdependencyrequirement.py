from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import componentdependencytype_enum


@dataclass_json
@dataclass
class ComponentDependencyRequirement:
    dependency_type: Optional[componentdependencytype_enum.ComponentDependencyTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dependencyType' }})
    version_requirement: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'versionRequirement' }})
    
