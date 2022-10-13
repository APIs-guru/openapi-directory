from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import deployment


@dataclass_json
@dataclass
class ListDeploymentsResponse:
    deployments: Optional[List[deployment.Deployment]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Deployments' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    
