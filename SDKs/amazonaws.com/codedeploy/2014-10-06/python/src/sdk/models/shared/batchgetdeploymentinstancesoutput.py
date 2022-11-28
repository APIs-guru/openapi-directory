from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class BatchGetDeploymentInstancesOutput:
    r"""BatchGetDeploymentInstancesOutput
    Represents the output of a <code>BatchGetDeploymentInstances</code> operation.
    """
    
    error_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errorMessage') }})
    instances_summary: Optional[List[InstanceSummary]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('instancesSummary') }})
    
