from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetAgentsPathParams:
    runmode: str = field(default=None, metadata={'path_param': { 'field_name': 'runmode', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetAgentsRequest:
    path_params: GetAgentsPathParams = field(default=None)
    

@dataclass
class GetAgentsResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    get_agents_default_application_json_string: Optional[str] = field(default=None)
    
