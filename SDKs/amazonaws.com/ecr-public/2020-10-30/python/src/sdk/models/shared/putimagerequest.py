from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class PutImageRequest:
    image_manifest: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('imageManifest') }})
    repository_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('repositoryName') }})
    image_digest: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('imageDigest') }})
    image_manifest_media_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('imageManifestMediaType') }})
    image_tag: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('imageTag') }})
    registry_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('registryId') }})
    
