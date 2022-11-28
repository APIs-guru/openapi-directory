from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DeploymentStyle:
    r"""DeploymentStyle
    Information about the type of deployment, either in-place or blue/green, you want to run and whether to route deployment traffic behind a load balancer.
    """
    
    deployment_option: Optional[DeploymentOptionEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deploymentOption') }})
    deployment_type: Optional[DeploymentTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deploymentType') }})
    
