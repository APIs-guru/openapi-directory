from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DeleteBranchOutput:
    r"""DeleteBranchOutput
    Represents the output of a delete branch operation.
    """
    
    deleted_branch: Optional[BranchInfo] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deletedBranch') }})
    
