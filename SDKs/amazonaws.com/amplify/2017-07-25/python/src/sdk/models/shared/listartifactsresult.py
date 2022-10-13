from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import artifact


@dataclass_json
@dataclass
class ListArtifactsResult:
    artifacts: List[artifact.Artifact] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'artifacts' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextToken' }})
    
