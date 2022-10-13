from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class UploadLayerPartResponse:
    last_byte_received: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastByteReceived' }})
    registry_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'registryId' }})
    repository_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'repositoryName' }})
    upload_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uploadId' }})
    
