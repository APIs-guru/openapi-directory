from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DeleteBranchResult:
    r"""DeleteBranchResult
     The result structure for the delete branch request. 
    """
    
    branch: Branch = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('branch') }})
    
