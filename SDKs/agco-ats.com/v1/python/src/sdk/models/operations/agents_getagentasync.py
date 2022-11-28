from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class AgentsGetAgentAsyncPathParams:
    agent_id: int = field(metadata={'path_param': { 'field_name': 'agentID', 'style': 'simple', 'explode': False }})
    

@dataclass
class AgentsGetAgentAsyncRequest:
    path_params: AgentsGetAgentAsyncPathParams = field()
    

@dataclass
class AgentsGetAgentAsyncResponse:
    content_type: str = field()
    status_code: int = field()
    api_models_api_error: Optional[shared.APIModelsAPIError] = field(default=None)
    body: Optional[bytes] = field(default=None)
    build_system_shared_dto_agent: Optional[shared.BuildSystemSharedDtoAgent] = field(default=None)
    
