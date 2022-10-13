from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import deploymenttarget


@dataclass_json
@dataclass
class GetDeploymentTargetOutput:
    deployment_target: Optional[deploymenttarget.DeploymentTarget] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deploymentTarget' }})
    
