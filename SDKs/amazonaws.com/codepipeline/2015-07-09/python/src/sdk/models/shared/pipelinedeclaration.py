from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import artifactstore
from . import artifactstore
from . import stagedeclaration


@dataclass_json
@dataclass
class PipelineDeclaration:
    artifact_store: Optional[artifactstore.ArtifactStore] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'artifactStore' }})
    artifact_stores: Optional[dict[str, artifactstore.ArtifactStore]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'artifactStores' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    role_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'roleArn' }})
    stages: List[stagedeclaration.StageDeclaration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'stages' }})
    version: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'version' }})
    
