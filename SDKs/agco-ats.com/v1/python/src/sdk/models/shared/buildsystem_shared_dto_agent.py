from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class BuildSystemSharedDtoAgentInput:
    r"""BuildSystemSharedDtoAgentInput
    A DTO for an IAgent
    """
    
    keep_alive_interval: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('KeepAliveInterval') }, 'form': { 'field_name': 'KeepAliveInterval' }})
    machine_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('MachineName') }, 'form': { 'field_name': 'MachineName' }})
    status: BuildSystemSharedDtoAgentStatus = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Status') }, 'form': { 'field_name': 'Status' }})
    user_id: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('UserID') }, 'form': { 'field_name': 'UserID' }})
    agent_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AgentID') }, 'form': { 'field_name': 'AgentID' }})
    

@dataclass_json
@dataclass
class BuildSystemSharedDtoAgent:
    r"""BuildSystemSharedDtoAgent
    A DTO for an IAgent
    """
    
    keep_alive_interval: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('KeepAliveInterval') }})
    machine_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('MachineName') }})
    status: BuildSystemSharedDtoAgentStatus = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Status') }})
    user_id: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('UserID') }})
    agent_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AgentID') }})
    step_configurations: Optional[List[BuildSystemSharedDtoStepConfiguration]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StepConfigurations') }})
    
