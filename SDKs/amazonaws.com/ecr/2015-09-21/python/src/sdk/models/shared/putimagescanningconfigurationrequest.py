from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import imagescanningconfiguration


@dataclass_json
@dataclass
class PutImageScanningConfigurationRequest:
    image_scanning_configuration: imagescanningconfiguration.ImageScanningConfiguration = field(default=None, metadata={'dataclasses_json': { 'field_name': 'imageScanningConfiguration' }})
    registry_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'registryId' }})
    repository_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'repositoryName' }})
    
