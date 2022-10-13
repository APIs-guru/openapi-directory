from dataclasses import dataclass, field



@dataclass
class DeleteNodePathParams:
    name: str = field(default=None, metadata={'path_param': { 'field_name': 'name', 'style': 'simple', 'explode': False }})
    path: str = field(default=None, metadata={'path_param': { 'field_name': 'path', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteNodeRequest:
    path_params: DeleteNodePathParams = field(default=None)
    

@dataclass
class DeleteNodeResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
