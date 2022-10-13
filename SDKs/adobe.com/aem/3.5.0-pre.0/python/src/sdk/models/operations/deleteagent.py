from dataclasses import dataclass, field



@dataclass
class DeleteAgentPathParams:
    name: str = field(default=None, metadata={'path_param': { 'field_name': 'name', 'style': 'simple', 'explode': False }})
    runmode: str = field(default=None, metadata={'path_param': { 'field_name': 'runmode', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteAgentRequest:
    path_params: DeleteAgentPathParams = field(default=None)
    

@dataclass
class DeleteAgentResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
