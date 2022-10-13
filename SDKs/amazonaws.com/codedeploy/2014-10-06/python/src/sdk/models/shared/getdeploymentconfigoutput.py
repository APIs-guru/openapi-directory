from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import deploymentconfiginfo


@dataclass_json
@dataclass
class GetDeploymentConfigOutput:
    deployment_config_info: Optional[deploymentconfiginfo.DeploymentConfigInfo] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deploymentConfigInfo' }})
    
