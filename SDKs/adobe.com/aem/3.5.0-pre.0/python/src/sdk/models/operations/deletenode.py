from dataclasses import dataclass, field



@dataclass
class DeleteNodePathParams:
    name: str = field(metadata={'path_param': { 'field_name': 'name', 'style': 'simple', 'explode': False }})
    path: str = field(metadata={'path_param': { 'field_name': 'path', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteNodeRequest:
    path_params: DeleteNodePathParams = field()
    

@dataclass
class DeleteNodeResponse:
    content_type: str = field()
    status_code: int = field()
    
