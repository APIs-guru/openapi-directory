from dataclasses import dataclass, field



@dataclass
class GetAgentPathParams:
    name: str = field(metadata={'path_param': { 'field_name': 'name', 'style': 'simple', 'explode': False }})
    runmode: str = field(metadata={'path_param': { 'field_name': 'runmode', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetAgentRequest:
    path_params: GetAgentPathParams = field()
    

@dataclass
class GetAgentResponse:
    content_type: str = field()
    status_code: int = field()
    
