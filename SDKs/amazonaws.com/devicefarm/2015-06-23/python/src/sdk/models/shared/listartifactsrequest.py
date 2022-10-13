from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import artifactcategory_enum


@dataclass_json
@dataclass
class ListArtifactsRequest:
    arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'arn' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextToken' }})
    type: artifactcategory_enum.ArtifactCategoryEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
