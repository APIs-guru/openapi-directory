from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class AgentPreview:
    r"""AgentPreview
    Used as a response element in the <a>PreviewAgents</a> action.
    """
    
    agent_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('agentId') }})
    agent_health: Optional[AgentHealthEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('agentHealth') }})
    agent_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('agentVersion') }})
    auto_scaling_group: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('autoScalingGroup') }})
    hostname: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hostname') }})
    ipv4_address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ipv4Address') }})
    kernel_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kernelVersion') }})
    operating_system: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('operatingSystem') }})
    
