from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import imageconfiguration
from . import imagerepositorytype_enum


@dataclass_json
@dataclass
class ImageRepository:
    image_configuration: Optional[imageconfiguration.ImageConfiguration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ImageConfiguration' }})
    image_identifier: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ImageIdentifier' }})
    image_repository_type: imagerepositorytype_enum.ImageRepositoryTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ImageRepositoryType' }})
    
