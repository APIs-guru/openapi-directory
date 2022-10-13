from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import imagescanningconfiguration


@dataclass_json
@dataclass
class PutImageScanningConfigurationResponse:
    image_scanning_configuration: Optional[imagescanningconfiguration.ImageScanningConfiguration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'imageScanningConfiguration' }})
    registry_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'registryId' }})
    repository_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'repositoryName' }})
    
