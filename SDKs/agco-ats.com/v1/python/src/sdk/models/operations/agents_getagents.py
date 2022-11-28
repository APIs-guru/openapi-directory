from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class AgentsGetAgentsQueryParams:
    limit: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    offset: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    

@dataclass
class AgentsGetAgentsRequest:
    query_params: AgentsGetAgentsQueryParams = field()
    

@dataclass
class AgentsGetAgentsResponse:
    content_type: str = field()
    status_code: int = field()
    api_models_api_error: Optional[shared.APIModelsAPIError] = field(default=None)
    api_paged_response_build_system_shared_dto_agent_: Optional[shared.APIPagedResponseBuildSystemSharedDtoAgent] = field(default=None)
    
