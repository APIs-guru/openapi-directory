from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class CompleteLayerUploadResponse:
    layer_digest: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('layerDigest') }})
    registry_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('registryId') }})
    repository_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('repositoryName') }})
    upload_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('uploadId') }})
    
