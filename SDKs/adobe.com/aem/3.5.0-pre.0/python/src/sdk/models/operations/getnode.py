from dataclasses import dataclass, field



@dataclass
class GetNodePathParams:
    name: str = field(default=None, metadata={'path_param': { 'field_name': 'name', 'style': 'simple', 'explode': False }})
    path: str = field(default=None, metadata={'path_param': { 'field_name': 'path', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetNodeRequest:
    path_params: GetNodePathParams = field(default=None)
    

@dataclass
class GetNodeResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
