from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GetBulkDeploymentStatusResponse:
    bulk_deployment_metrics: Optional[BulkDeploymentMetrics] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BulkDeploymentMetrics') }})
    bulk_deployment_status: Optional[BulkDeploymentStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BulkDeploymentStatus') }})
    created_at: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CreatedAt') }})
    error_details: Optional[List[ErrorDetail]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ErrorDetails') }})
    error_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ErrorMessage') }})
    tags: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    
