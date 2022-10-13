from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import artifactlocation


@dataclass_json
@dataclass
class Artifact:
    location: Optional[artifactlocation.ArtifactLocation] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'location' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    revision: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'revision' }})
    
