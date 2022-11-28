from dataclasses import dataclass, field
from typing import List
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class TaskFilter:
    r"""TaskFilter
    You can use API filters to narrow down the list of resources returned by <code>ListTasks</code>. For example, to retrieve all tasks on a source location, you can use <code>ListTasks</code> with filter name <code>LocationId</code> and <code>Operator Equals</code> with the ARN for the location.
    """
    
    name: TaskFilterNameEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    operator: OperatorEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Operator') }})
    values: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Values') }})
    
