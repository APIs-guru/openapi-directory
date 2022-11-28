from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class PlacementConstraint:
    r"""PlacementConstraint
    An object representing a constraint on task placement. To learn more, see <a href=\"https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task-placement-constraints.html\">Task Placement Constraints</a> in the Amazon Elastic Container Service Developer Guide.
    """
    
    expression: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('expression') }})
    type: Optional[PlacementConstraintTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
