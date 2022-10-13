from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import deploymentreadyaction_enum


@dataclass_json
@dataclass
class DeploymentReadyOption:
    action_on_timeout: Optional[deploymentreadyaction_enum.DeploymentReadyActionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'actionOnTimeout' }})
    wait_time_in_minutes: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'waitTimeInMinutes' }})
    
