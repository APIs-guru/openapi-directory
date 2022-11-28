from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GetDeploymentConfigOutput:
    r"""GetDeploymentConfigOutput
    Represents the output of a <code>GetDeploymentConfig</code> operation.
    """
    
    deployment_config_info: Optional[DeploymentConfigInfo] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deploymentConfigInfo') }})
    
