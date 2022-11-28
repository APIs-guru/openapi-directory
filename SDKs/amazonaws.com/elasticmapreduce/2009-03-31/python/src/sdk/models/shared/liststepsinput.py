from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListStepsInput:
    r"""ListStepsInput
    This input determines which steps to list.
    """
    
    cluster_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ClusterId') }})
    marker: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Marker') }})
    step_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StepIds') }})
    step_states: Optional[List[StepStateEnum]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StepStates') }})
    
