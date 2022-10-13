from dataclasses import dataclass, field



@dataclass
class AgentsDeleteAgentPathParams:
    agent_id: int = field(default=None, metadata={'path_param': { 'field_name': 'agentID', 'style': 'simple', 'explode': False }})
    

@dataclass
class AgentsDeleteAgentRequest:
    path_params: AgentsDeleteAgentPathParams = field(default=None)
    

@dataclass
class AgentsDeleteAgentResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
