from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class DescribeStepInput:
    r"""DescribeStepInput
    This input determines which step to describe.
    """
    
    cluster_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ClusterId') }})
    step_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('StepId') }})
    
