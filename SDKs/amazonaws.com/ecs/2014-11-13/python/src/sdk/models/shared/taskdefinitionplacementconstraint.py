from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class TaskDefinitionPlacementConstraint:
    r"""TaskDefinitionPlacementConstraint
    <p>An object representing a constraint on task placement in the task definition. For more information, see <a href=\"https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task-placement-constraints.html\">Task placement constraints</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p> <note> <p>Task placement constraints are not supported for tasks run on Fargate.</p> </note>
    """
    
    expression: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('expression') }})
    type: Optional[TaskDefinitionPlacementConstraintTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
