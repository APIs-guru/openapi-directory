from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import effectivedeployment


@dataclass_json
@dataclass
class ListEffectiveDeploymentsResponse:
    effective_deployments: Optional[List[effectivedeployment.EffectiveDeployment]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'effectiveDeployments' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextToken' }})
    
