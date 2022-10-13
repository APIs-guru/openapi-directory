from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ComponentCandidate:
    component_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'componentName' }})
    component_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'componentVersion' }})
    version_requirements: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'versionRequirements' }})
    
