from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ExecutionControls:
    r"""ExecutionControls
    The controls that Config uses for executing remediations.
    """
    
    ssm_controls: Optional[SsmControls] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SsmControls') }})
    
