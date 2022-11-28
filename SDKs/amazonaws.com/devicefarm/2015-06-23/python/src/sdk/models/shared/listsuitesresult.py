from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListSuitesResult:
    r"""ListSuitesResult
    Represents the result of a list suites request.
    """
    
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextToken') }})
    suites: Optional[List[Suite]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('suites') }})
    
