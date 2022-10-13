from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class StopDeploymentInput:
    auto_rollback_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'autoRollbackEnabled' }})
    deployment_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deploymentId' }})
    
