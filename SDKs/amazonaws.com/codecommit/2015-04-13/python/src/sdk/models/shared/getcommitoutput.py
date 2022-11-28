from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GetCommitOutput:
    r"""GetCommitOutput
    Represents the output of a get commit operation.
    """
    
    commit: Commit = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('commit') }})
    
