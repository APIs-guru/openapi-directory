from dataclasses import dataclass, field



@dataclass
class PostJmxRepositoryPathParams:
    action: str = field(default=None, metadata={'path_param': { 'field_name': 'action', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostJmxRepositoryRequest:
    path_params: PostJmxRepositoryPathParams = field(default=None)
    

@dataclass
class PostJmxRepositoryResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
