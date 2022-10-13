from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import deploymenttype_enum
from . import errordetail


@dataclass_json
@dataclass
class BulkDeploymentResult:
    created_at: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreatedAt' }})
    deployment_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DeploymentArn' }})
    deployment_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DeploymentId' }})
    deployment_status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DeploymentStatus' }})
    deployment_type: Optional[deploymenttype_enum.DeploymentTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DeploymentType' }})
    error_details: Optional[List[errordetail.ErrorDetail]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ErrorDetails' }})
    error_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ErrorMessage' }})
    group_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'GroupArn' }})
    
