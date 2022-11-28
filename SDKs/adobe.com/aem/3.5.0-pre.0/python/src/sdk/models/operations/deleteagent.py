from dataclasses import dataclass, field



@dataclass
class DeleteAgentPathParams:
    name: str = field(metadata={'path_param': { 'field_name': 'name', 'style': 'simple', 'explode': False }})
    runmode: str = field(metadata={'path_param': { 'field_name': 'runmode', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteAgentRequest:
    path_params: DeleteAgentPathParams = field()
    

@dataclass
class DeleteAgentResponse:
    content_type: str = field()
    status_code: int = field()
    
