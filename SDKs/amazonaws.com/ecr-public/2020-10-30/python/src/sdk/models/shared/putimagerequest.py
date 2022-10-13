from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class PutImageRequest:
    image_digest: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'imageDigest' }})
    image_manifest: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'imageManifest' }})
    image_manifest_media_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'imageManifestMediaType' }})
    image_tag: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'imageTag' }})
    registry_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'registryId' }})
    repository_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'repositoryName' }})
    
