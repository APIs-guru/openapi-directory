from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import tag
from . import taskdefinition


@dataclass_json
@dataclass
class DescribeTaskDefinitionResponse:
    tags: Optional[List[tag.Tag]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tags' }})
    task_definition: Optional[taskdefinition.TaskDefinition] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'taskDefinition' }})
    
