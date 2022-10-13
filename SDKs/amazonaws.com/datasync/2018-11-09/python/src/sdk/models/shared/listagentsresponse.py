from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import agentlistentry


@dataclass_json
@dataclass
class ListAgentsResponse:
    agents: Optional[List[agentlistentry.AgentListEntry]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Agents' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    
