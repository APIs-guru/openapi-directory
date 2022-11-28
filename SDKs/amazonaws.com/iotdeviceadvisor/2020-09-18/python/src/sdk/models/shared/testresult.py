from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class TestResult:
    r"""TestResult
    Show each group result.
    """
    
    groups: Optional[List[GroupResult]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('groups') }})
    
