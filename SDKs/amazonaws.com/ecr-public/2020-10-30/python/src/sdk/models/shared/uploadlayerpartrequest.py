from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class UploadLayerPartRequest:
    layer_part_blob: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'layerPartBlob' }})
    part_first_byte: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'partFirstByte' }})
    part_last_byte: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'partLastByte' }})
    registry_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'registryId' }})
    repository_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'repositoryName' }})
    upload_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uploadId' }})
    
