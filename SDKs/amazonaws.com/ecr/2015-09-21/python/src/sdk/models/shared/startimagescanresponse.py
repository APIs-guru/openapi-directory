from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class StartImageScanResponse:
    image_id: Optional[ImageIdentifier] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('imageId') }})
    image_scan_status: Optional[ImageScanStatus] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('imageScanStatus') }})
    registry_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('registryId') }})
    repository_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('repositoryName') }})
    
