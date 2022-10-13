from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import createdartifact


@dataclass_json
@dataclass
class ListCreatedArtifactsResult:
    created_artifact_list: Optional[List[createdartifact.CreatedArtifact]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreatedArtifactList' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    
