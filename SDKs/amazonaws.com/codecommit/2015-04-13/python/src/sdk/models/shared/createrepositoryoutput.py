from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CreateRepositoryOutput:
    r"""CreateRepositoryOutput
    Represents the output of a create repository operation.
    """
    
    repository_metadata: Optional[RepositoryMetadata] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('repositoryMetadata') }})
    
