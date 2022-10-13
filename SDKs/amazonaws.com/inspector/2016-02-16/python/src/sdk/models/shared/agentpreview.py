from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import agenthealth_enum


@dataclass_json
@dataclass
class AgentPreview:
    agent_health: Optional[agenthealth_enum.AgentHealthEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'agentHealth' }})
    agent_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'agentId' }})
    agent_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'agentVersion' }})
    auto_scaling_group: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'autoScalingGroup' }})
    hostname: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hostname' }})
    ipv4_address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ipv4Address' }})
    kernel_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kernelVersion' }})
    operating_system: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'operatingSystem' }})
    
