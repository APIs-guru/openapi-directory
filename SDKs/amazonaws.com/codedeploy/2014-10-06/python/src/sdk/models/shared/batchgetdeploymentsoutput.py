from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import deploymentinfo


@dataclass_json
@dataclass
class BatchGetDeploymentsOutput:
    deployments_info: Optional[List[deploymentinfo.DeploymentInfo]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deploymentsInfo' }})
    
