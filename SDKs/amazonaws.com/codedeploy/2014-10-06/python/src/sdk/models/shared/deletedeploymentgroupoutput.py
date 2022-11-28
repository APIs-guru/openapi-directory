from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DeleteDeploymentGroupOutput:
    r"""DeleteDeploymentGroupOutput
    Represents the output of a <code>DeleteDeploymentGroup</code> operation.
    """
    
    hooks_not_cleaned_up: Optional[List[AutoScalingGroup]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hooksNotCleanedUp') }})
    
