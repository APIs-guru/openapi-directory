from dataclasses import dataclass, field
from typing import Optional


@dataclass
class AgentsDeleteAgentPathParams:
    agent_id: int = field(metadata={'path_param': { 'field_name': 'agentID', 'style': 'simple', 'explode': False }})
    

@dataclass
class AgentsDeleteAgentRequest:
    path_params: AgentsDeleteAgentPathParams = field()
    

@dataclass
class AgentsDeleteAgentResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
