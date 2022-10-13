from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class CompleteLayerUploadRequest:
    layer_digests: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'layerDigests' }})
    registry_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'registryId' }})
    repository_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'repositoryName' }})
    upload_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uploadId' }})
    
