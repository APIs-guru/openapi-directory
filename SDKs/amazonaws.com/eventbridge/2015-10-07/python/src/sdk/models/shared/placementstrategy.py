from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class PlacementStrategy:
    r"""PlacementStrategy
    The task placement strategy for a task or service. To learn more, see <a href=\"https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task-placement-strategies.html\">Task Placement Strategies</a> in the Amazon Elastic Container Service Service Developer Guide.
    """
    
    field: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('field') }})
    type: Optional[PlacementStrategyTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
