from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GetDeploymentGroupOutput:
    r"""GetDeploymentGroupOutput
    Represents the output of a <code>GetDeploymentGroup</code> operation.
    """
    
    deployment_group_info: Optional[DeploymentGroupInfo] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deploymentGroupInfo') }})
    
