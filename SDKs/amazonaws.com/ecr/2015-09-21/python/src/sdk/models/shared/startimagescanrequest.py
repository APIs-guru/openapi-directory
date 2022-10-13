from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import imageidentifier


@dataclass_json
@dataclass
class StartImageScanRequest:
    image_id: imageidentifier.ImageIdentifier = field(default=None, metadata={'dataclasses_json': { 'field_name': 'imageId' }})
    registry_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'registryId' }})
    repository_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'repositoryName' }})
    
