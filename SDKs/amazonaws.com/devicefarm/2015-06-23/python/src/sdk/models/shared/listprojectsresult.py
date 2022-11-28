from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListProjectsResult:
    r"""ListProjectsResult
    Represents the result of a list projects request.
    """
    
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextToken') }})
    projects: Optional[List[Project]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('projects') }})
    
