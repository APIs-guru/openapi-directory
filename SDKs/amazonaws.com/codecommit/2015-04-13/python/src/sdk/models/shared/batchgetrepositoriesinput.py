from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class BatchGetRepositoriesInput:
    r"""BatchGetRepositoriesInput
    Represents the input of a batch get repositories operation.
    """
    
    repository_names: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('repositoryNames') }})
    
