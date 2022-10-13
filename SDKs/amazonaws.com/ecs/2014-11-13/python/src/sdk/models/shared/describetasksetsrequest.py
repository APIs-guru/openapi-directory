from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import tasksetfield_enum


@dataclass_json
@dataclass
class DescribeTaskSetsRequest:
    cluster: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cluster' }})
    include: Optional[List[tasksetfield_enum.TaskSetFieldEnum]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'include' }})
    service: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'service' }})
    task_sets: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'taskSets' }})
    
