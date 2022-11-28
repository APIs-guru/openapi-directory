from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetAgentsPathParams:
    runmode: str = field(metadata={'path_param': { 'field_name': 'runmode', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetAgentsRequest:
    path_params: GetAgentsPathParams = field()
    

@dataclass
class GetAgentsResponse:
    content_type: str = field()
    status_code: int = field()
    get_agents_default_application_json_string: Optional[str] = field(default=None)
    
