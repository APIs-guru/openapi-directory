from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CancelStepsInput:
    r"""CancelStepsInput
    The input argument to the <a>CancelSteps</a> operation.
    """
    
    cluster_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ClusterId') }})
    step_ids: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('StepIds') }})
    step_cancellation_option: Optional[StepCancellationOptionEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StepCancellationOption') }})
    
