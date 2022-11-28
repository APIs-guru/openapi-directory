from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DeploymentTarget:
    r"""DeploymentTarget
     Information about the deployment target. 
    """
    
    cloud_formation_target: Optional[CloudFormationTarget] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cloudFormationTarget') }})
    deployment_target_type: Optional[DeploymentTargetTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deploymentTargetType') }})
    ecs_target: Optional[EcsTarget] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ecsTarget') }})
    instance_target: Optional[InstanceTarget] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('instanceTarget') }})
    lambda_target: Optional[LambdaTarget] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lambdaTarget') }})
    
