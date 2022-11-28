from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DescribeStepOutput:
    r"""DescribeStepOutput
    This output contains the description of the cluster step.
    """
    
    step: Optional[Step] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Step') }})
    
