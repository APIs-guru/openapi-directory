from dataclasses import dataclass, field
from typing import Enum,List
from dataclasses_json import dataclass_json
from . import agenthealthcode_enum
from . import agenthealth_enum


@dataclass_json
@dataclass
class AgentFilter:
    agent_health_codes: List[agenthealthcode_enum.AgentHealthCodeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'agentHealthCodes' }})
    agent_healths: List[agenthealth_enum.AgentHealthEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'agentHealths' }})
    
