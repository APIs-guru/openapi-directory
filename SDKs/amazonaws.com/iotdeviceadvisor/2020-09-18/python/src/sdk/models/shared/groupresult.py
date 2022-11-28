from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GroupResult:
    r"""GroupResult
    Show Group Result.
    """
    
    group_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('groupId') }})
    group_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('groupName') }})
    tests: Optional[List[TestCaseRun]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tests') }})
    
