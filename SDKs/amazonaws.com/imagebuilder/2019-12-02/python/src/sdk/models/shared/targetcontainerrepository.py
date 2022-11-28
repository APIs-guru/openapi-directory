from dataclasses import dataclass, field
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class TargetContainerRepository:
    r"""TargetContainerRepository
    The container repository where the output container image is stored.
    """
    
    repository_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('repositoryName') }})
    service: ContainerRepositoryServiceEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('service') }})
    
