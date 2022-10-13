from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import imageidentifier


@dataclass_json
@dataclass
class Image:
    image_id: Optional[imageidentifier.ImageIdentifier] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'imageId' }})
    image_manifest: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'imageManifest' }})
    image_manifest_media_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'imageManifestMediaType' }})
    registry_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'registryId' }})
    repository_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'repositoryName' }})
    
