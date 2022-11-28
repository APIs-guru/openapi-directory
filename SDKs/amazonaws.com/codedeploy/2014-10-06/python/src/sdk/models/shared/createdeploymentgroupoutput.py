from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class CreateDeploymentGroupOutput:
    r"""CreateDeploymentGroupOutput
    Represents the output of a <code>CreateDeploymentGroup</code> operation.
    """
    
    deployment_group_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deploymentGroupId') }})
    
