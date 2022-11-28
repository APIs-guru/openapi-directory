from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class RegisterTaskDefinitionResponse:
    tags: Optional[List[Tag]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    task_definition: Optional[TaskDefinition] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('taskDefinition') }})
    
