from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import buildsystem_shared_dto_agentstatus
from . import buildsystem_shared_dto_stepconfiguration


@dataclass_json
@dataclass
class BuildSystemSharedDtoAgent:
    agent_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AgentID' }})
    keep_alive_interval: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'KeepAliveInterval' }})
    machine_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MachineName' }})
    status: buildsystem_shared_dto_agentstatus.BuildSystemSharedDtoAgentStatus = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Status' }})
    step_configurations: Optional[List[buildsystem_shared_dto_stepconfiguration.BuildSystemSharedDtoStepConfiguration]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StepConfigurations' }})
    user_id: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'UserID' }})
    
