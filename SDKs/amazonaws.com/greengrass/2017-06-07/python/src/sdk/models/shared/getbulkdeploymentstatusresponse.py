from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import bulkdeploymentmetrics
from . import bulkdeploymentstatus_enum
from . import errordetail


@dataclass_json
@dataclass
class GetBulkDeploymentStatusResponse:
    bulk_deployment_metrics: Optional[bulkdeploymentmetrics.BulkDeploymentMetrics] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'BulkDeploymentMetrics' }})
    bulk_deployment_status: Optional[bulkdeploymentstatus_enum.BulkDeploymentStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'BulkDeploymentStatus' }})
    created_at: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreatedAt' }})
    error_details: Optional[List[errordetail.ErrorDetail]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ErrorDetails' }})
    error_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ErrorMessage' }})
    tags: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tags' }})
    
