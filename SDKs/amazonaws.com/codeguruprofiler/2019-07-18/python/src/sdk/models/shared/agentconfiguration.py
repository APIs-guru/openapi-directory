from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class AgentConfiguration:
    agent_parameters: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'agentParameters' }})
    period_in_seconds: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'periodInSeconds' }})
    should_profile: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'shouldProfile' }})
    
