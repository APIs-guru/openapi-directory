from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import imagetagmutability_enum


@dataclass_json
@dataclass
class PutImageTagMutabilityRequest:
    image_tag_mutability: imagetagmutability_enum.ImageTagMutabilityEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'imageTagMutability' }})
    registry_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'registryId' }})
    repository_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'repositoryName' }})
    
