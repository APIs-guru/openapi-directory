from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DescribeTasksRequest:
    tasks: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('tasks') }})
    cluster: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cluster') }})
    include: Optional[List[TaskFieldEnum]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('include') }})
    
