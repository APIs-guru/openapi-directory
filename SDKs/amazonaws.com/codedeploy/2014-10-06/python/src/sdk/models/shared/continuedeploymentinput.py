from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import deploymentwaittype_enum


@dataclass_json
@dataclass
class ContinueDeploymentInput:
    deployment_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deploymentId' }})
    deployment_wait_type: Optional[deploymentwaittype_enum.DeploymentWaitTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deploymentWaitType' }})
    
