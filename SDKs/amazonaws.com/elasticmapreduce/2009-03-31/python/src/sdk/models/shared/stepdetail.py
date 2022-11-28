from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class StepDetail:
    r"""StepDetail
    Combines the execution state and configuration of a step.
    """
    
    execution_status_detail: StepExecutionStatusDetail = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ExecutionStatusDetail') }})
    step_config: StepConfig = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('StepConfig') }})
    
