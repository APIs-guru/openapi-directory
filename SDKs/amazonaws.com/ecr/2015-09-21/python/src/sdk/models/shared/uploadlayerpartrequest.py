from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class UploadLayerPartRequest:
    layer_part_blob: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('layerPartBlob') }})
    part_first_byte: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('partFirstByte') }})
    part_last_byte: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('partLastByte') }})
    repository_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('repositoryName') }})
    upload_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uploadId') }})
    registry_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('registryId') }})
    
