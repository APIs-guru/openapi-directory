from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import deploymenttarget


@dataclass_json
@dataclass
class BatchGetDeploymentTargetsOutput:
    deployment_targets: Optional[List[deploymenttarget.DeploymentTarget]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deploymentTargets' }})
    
