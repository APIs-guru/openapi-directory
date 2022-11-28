from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ImageRepository:
    r"""ImageRepository
    Describes a source image repository.
    """
    
    image_identifier: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ImageIdentifier') }})
    image_repository_type: ImageRepositoryTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ImageRepositoryType') }})
    image_configuration: Optional[ImageConfiguration] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ImageConfiguration') }})
    
