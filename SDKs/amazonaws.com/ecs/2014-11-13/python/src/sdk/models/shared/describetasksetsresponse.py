from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import failure
from . import taskset


@dataclass_json
@dataclass
class DescribeTaskSetsResponse:
    failures: Optional[List[failure.Failure]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'failures' }})
    task_sets: Optional[List[taskset.TaskSet]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'taskSets' }})
    
