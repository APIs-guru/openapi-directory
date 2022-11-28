from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class BulkDeploymentResult:
    r"""BulkDeploymentResult
    Information about an individual group deployment in a bulk deployment operation.
    """
    
    created_at: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CreatedAt') }})
    deployment_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DeploymentArn') }})
    deployment_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DeploymentId') }})
    deployment_status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DeploymentStatus') }})
    deployment_type: Optional[DeploymentTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DeploymentType') }})
    error_details: Optional[List[ErrorDetail]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ErrorDetails') }})
    error_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ErrorMessage') }})
    group_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('GroupArn') }})
    
