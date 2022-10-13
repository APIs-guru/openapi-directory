from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class AgentConfigurationStatus:
    agent_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'agentId' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    operation_succeeded: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'operationSucceeded' }})
    
