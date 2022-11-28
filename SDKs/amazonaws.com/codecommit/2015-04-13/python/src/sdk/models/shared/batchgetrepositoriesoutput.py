from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class BatchGetRepositoriesOutput:
    r"""BatchGetRepositoriesOutput
    Represents the output of a batch get repositories operation.
    """
    
    repositories: Optional[List[RepositoryMetadata]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('repositories') }})
    repositories_not_found: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('repositoriesNotFound') }})
    
