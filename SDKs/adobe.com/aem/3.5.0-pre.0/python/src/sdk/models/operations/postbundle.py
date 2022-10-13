from dataclasses import dataclass, field



@dataclass
class PostBundlePathParams:
    name: str = field(default=None, metadata={'path_param': { 'field_name': 'name', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostBundleQueryParams:
    action: str = field(default=None, metadata={'query_param': { 'field_name': 'action', 'style': 'form', 'explode': True }})
    

@dataclass
class PostBundleRequest:
    path_params: PostBundlePathParams = field(default=None)
    query_params: PostBundleQueryParams = field(default=None)
    

@dataclass
class PostBundleResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
