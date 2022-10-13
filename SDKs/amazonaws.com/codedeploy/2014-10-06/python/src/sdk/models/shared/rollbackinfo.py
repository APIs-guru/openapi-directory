from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class RollbackInfo:
    rollback_deployment_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rollbackDeploymentId' }})
    rollback_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rollbackMessage' }})
    rollback_triggering_deployment_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rollbackTriggeringDeploymentId' }})
    
