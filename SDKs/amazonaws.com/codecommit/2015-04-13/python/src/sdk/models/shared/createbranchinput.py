from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class CreateBranchInput:
    r"""CreateBranchInput
    Represents the input of a create branch operation.
    """
    
    branch_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('branchName') }})
    commit_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('commitId') }})
    repository_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('repositoryName') }})
    
