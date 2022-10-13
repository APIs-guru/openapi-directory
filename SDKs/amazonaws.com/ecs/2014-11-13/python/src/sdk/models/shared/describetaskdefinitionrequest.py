from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import taskdefinitionfield_enum


@dataclass_json
@dataclass
class DescribeTaskDefinitionRequest:
    include: Optional[List[taskdefinitionfield_enum.TaskDefinitionFieldEnum]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'include' }})
    task_definition: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'taskDefinition' }})
    
