from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import artifactstype_enum


@dataclass_json
@dataclass
class ResolvedArtifact:
    identifier: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'identifier' }})
    location: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'location' }})
    type: Optional[artifactstype_enum.ArtifactsTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
