from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import cloudformationtarget
from . import deploymenttargettype_enum
from . import ecstarget
from . import instancetarget
from . import lambdatarget


@dataclass_json
@dataclass
class DeploymentTarget:
    cloud_formation_target: Optional[cloudformationtarget.CloudFormationTarget] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cloudFormationTarget' }})
    deployment_target_type: Optional[deploymenttargettype_enum.DeploymentTargetTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deploymentTargetType' }})
    ecs_target: Optional[ecstarget.EcsTarget] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ecsTarget' }})
    instance_target: Optional[instancetarget.InstanceTarget] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'instanceTarget' }})
    lambda_target: Optional[lambdatarget.LambdaTarget] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lambdaTarget' }})
    
