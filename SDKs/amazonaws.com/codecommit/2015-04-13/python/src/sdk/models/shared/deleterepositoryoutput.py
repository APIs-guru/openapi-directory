from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class DeleteRepositoryOutput:
    r"""DeleteRepositoryOutput
    Represents the output of a delete repository operation.
    """
    
    repository_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('repositoryId') }})
    
