from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import deploymenttype_enum


@dataclass_json
@dataclass
class Deployment:
    created_at: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreatedAt' }})
    deployment_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DeploymentArn' }})
    deployment_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DeploymentId' }})
    deployment_type: Optional[deploymenttype_enum.DeploymentTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DeploymentType' }})
    group_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'GroupArn' }})
    
