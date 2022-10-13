from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import bulkdeployment


@dataclass_json
@dataclass
class ListBulkDeploymentsResponse:
    bulk_deployments: Optional[List[bulkdeployment.BulkDeployment]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'BulkDeployments' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    
