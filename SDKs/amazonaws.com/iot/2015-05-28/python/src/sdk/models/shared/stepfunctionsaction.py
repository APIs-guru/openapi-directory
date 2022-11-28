from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class StepFunctionsAction:
    r"""StepFunctionsAction
    Starts execution of a Step Functions state machine.
    """
    
    role_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('roleArn') }})
    state_machine_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('stateMachineName') }})
    execution_name_prefix: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('executionNamePrefix') }})
    
