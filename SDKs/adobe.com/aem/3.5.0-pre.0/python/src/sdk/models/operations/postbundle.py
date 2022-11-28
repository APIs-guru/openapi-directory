from dataclasses import dataclass, field



@dataclass
class PostBundlePathParams:
    name: str = field(metadata={'path_param': { 'field_name': 'name', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostBundleQueryParams:
    action: str = field(metadata={'query_param': { 'field_name': 'action', 'style': 'form', 'explode': True }})
    

@dataclass
class PostBundleRequest:
    path_params: PostBundlePathParams = field()
    query_params: PostBundleQueryParams = field()
    

@dataclass
class PostBundleResponse:
    content_type: str = field()
    status_code: int = field()
    
