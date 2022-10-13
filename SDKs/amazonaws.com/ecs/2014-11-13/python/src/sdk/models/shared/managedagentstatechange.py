from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import managedagentname_enum


@dataclass_json
@dataclass
class ManagedAgentStateChange:
    container_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'containerName' }})
    managed_agent_name: managedagentname_enum.ManagedAgentNameEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'managedAgentName' }})
    reason: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reason' }})
    status: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    
