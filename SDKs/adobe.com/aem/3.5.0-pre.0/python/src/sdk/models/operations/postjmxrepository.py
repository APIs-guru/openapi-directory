from dataclasses import dataclass, field



@dataclass
class PostJmxRepositoryPathParams:
    action: str = field(metadata={'path_param': { 'field_name': 'action', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostJmxRepositoryRequest:
    path_params: PostJmxRepositoryPathParams = field()
    

@dataclass
class PostJmxRepositoryResponse:
    content_type: str = field()
    status_code: int = field()
    
