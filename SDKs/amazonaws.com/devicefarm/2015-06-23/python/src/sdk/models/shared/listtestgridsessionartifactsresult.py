from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import testgridsessionartifact


@dataclass_json
@dataclass
class ListTestGridSessionArtifactsResult:
    artifacts: Optional[List[testgridsessionartifact.TestGridSessionArtifact]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'artifacts' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextToken' }})
    
