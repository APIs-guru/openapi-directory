from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DescribeTaskSetsRequest:
    cluster: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('cluster') }})
    service: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('service') }})
    include: Optional[List[TaskSetFieldEnum]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('include') }})
    task_sets: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('taskSets') }})
    
