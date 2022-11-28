from dataclasses import dataclass, field



@dataclass
class GetNodePathParams:
    name: str = field(metadata={'path_param': { 'field_name': 'name', 'style': 'simple', 'explode': False }})
    path: str = field(metadata={'path_param': { 'field_name': 'path', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetNodeRequest:
    path_params: GetNodePathParams = field()
    

@dataclass
class GetNodeResponse:
    content_type: str = field()
    status_code: int = field()
    
