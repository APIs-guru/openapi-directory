from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class PutImageTagMutabilityRequest:
    image_tag_mutability: ImageTagMutabilityEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('imageTagMutability') }})
    repository_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('repositoryName') }})
    registry_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('registryId') }})
    
