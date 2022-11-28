from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class TestRepositoryTriggersInput:
    r"""TestRepositoryTriggersInput
    Represents the input of a test repository triggers operation.
    """
    
    repository_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('repositoryName') }})
    triggers: List[RepositoryTrigger] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('triggers') }})
    
