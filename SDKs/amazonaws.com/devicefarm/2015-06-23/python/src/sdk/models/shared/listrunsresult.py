from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListRunsResult:
    r"""ListRunsResult
    Represents the result of a list runs request.
    """
    
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextToken') }})
    runs: Optional[List[Run]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('runs') }})
    
