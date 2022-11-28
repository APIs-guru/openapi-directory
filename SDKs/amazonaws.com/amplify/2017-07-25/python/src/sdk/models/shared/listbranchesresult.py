from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListBranchesResult:
    r"""ListBranchesResult
     The result structure for the list branches request. 
    """
    
    branches: List[Branch] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('branches') }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextToken') }})
    
