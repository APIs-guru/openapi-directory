from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import deploymentcomponentupdatepolicyaction_enum


@dataclass_json
@dataclass
class DeploymentComponentUpdatePolicy:
    action: Optional[deploymentcomponentupdatepolicyaction_enum.DeploymentComponentUpdatePolicyActionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'action' }})
    timeout_in_seconds: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timeoutInSeconds' }})
    
