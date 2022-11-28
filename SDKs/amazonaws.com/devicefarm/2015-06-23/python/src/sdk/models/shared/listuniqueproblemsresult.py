from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListUniqueProblemsResult:
    r"""ListUniqueProblemsResult
    Represents the result of a list unique problems request.
    """
    
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextToken') }})
    unique_problems: Optional[dict[str, List[UniqueProblem]]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('uniqueProblems') }})
    
