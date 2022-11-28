from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GetDeploymentOutput:
    r"""GetDeploymentOutput
    Represents the output of a <code>GetDeployment</code> operation.
    """
    
    deployment_info: Optional[DeploymentInfo] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deploymentInfo') }})
    
