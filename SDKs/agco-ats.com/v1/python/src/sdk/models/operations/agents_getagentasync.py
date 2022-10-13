from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class AgentsGetAgentAsyncPathParams:
    agent_id: int = field(default=None, metadata={'path_param': { 'field_name': 'agentID', 'style': 'simple', 'explode': False }})
    

@dataclass
class AgentsGetAgentAsyncRequest:
    path_params: AgentsGetAgentAsyncPathParams = field(default=None)
    

@dataclass
class AgentsGetAgentAsyncResponse:
    api_models_api_error: Optional[shared.APIModelsAPIError] = field(default=None)
    body: bytes = field(default=None)
    build_system_shared_dto_agent: Optional[shared.BuildSystemSharedDtoAgent] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
