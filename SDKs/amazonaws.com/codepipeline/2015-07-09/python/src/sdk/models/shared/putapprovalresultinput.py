from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class PutApprovalResultInput:
    r"""PutApprovalResultInput
    Represents the input of a <code>PutApprovalResult</code> action.
    """
    
    action_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('actionName') }})
    pipeline_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('pipelineName') }})
    result: ApprovalResult = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('result') }})
    stage_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('stageName') }})
    token: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('token') }})
    
