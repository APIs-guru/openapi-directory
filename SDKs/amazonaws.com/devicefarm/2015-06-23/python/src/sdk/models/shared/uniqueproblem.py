from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class UniqueProblem:
    r"""UniqueProblem
    A collection of one or more problems, grouped by their result.
    """
    
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    problems: Optional[List[Problem]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('problems') }})
    
