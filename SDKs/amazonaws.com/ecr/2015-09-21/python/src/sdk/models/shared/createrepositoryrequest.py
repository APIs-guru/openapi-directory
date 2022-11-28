from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CreateRepositoryRequest:
    repository_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('repositoryName') }})
    encryption_configuration: Optional[EncryptionConfiguration] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('encryptionConfiguration') }})
    image_scanning_configuration: Optional[ImageScanningConfiguration] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('imageScanningConfiguration') }})
    image_tag_mutability: Optional[ImageTagMutabilityEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('imageTagMutability') }})
    tags: Optional[List[Tag]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    
