from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import imageidentifier
from . import imagescanstatus


@dataclass_json
@dataclass
class StartImageScanResponse:
    image_id: Optional[imageidentifier.ImageIdentifier] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'imageId' }})
    image_scan_status: Optional[imagescanstatus.ImageScanStatus] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'imageScanStatus' }})
    registry_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'registryId' }})
    repository_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'repositoryName' }})
    
