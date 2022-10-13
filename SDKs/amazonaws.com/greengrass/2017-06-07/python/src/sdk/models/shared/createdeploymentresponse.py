from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class CreateDeploymentResponse:
    deployment_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DeploymentArn' }})
    deployment_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DeploymentId' }})
    
