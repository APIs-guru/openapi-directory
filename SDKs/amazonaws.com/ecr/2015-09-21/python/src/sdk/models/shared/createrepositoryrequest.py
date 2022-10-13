from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import encryptionconfiguration
from . import imagescanningconfiguration
from . import imagetagmutability_enum
from . import tag


@dataclass_json
@dataclass
class CreateRepositoryRequest:
    encryption_configuration: Optional[encryptionconfiguration.EncryptionConfiguration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'encryptionConfiguration' }})
    image_scanning_configuration: Optional[imagescanningconfiguration.ImageScanningConfiguration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'imageScanningConfiguration' }})
    image_tag_mutability: Optional[imagetagmutability_enum.ImageTagMutabilityEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'imageTagMutability' }})
    repository_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'repositoryName' }})
    tags: Optional[List[tag.Tag]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tags' }})
    
