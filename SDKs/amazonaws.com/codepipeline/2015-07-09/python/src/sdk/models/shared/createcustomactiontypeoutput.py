from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CreateCustomActionTypeOutput:
    r"""CreateCustomActionTypeOutput
    Represents the output of a <code>CreateCustomActionType</code> operation.
    """
    
    action_type: ActionType = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('actionType') }})
    tags: Optional[List[Tag]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    
