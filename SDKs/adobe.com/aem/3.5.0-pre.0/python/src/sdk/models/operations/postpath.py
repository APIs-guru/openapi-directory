from dataclasses import dataclass, field



@dataclass
class PostPathPathParams:
    path: str = field(default=None, metadata={'path_param': { 'field_name': 'path', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostPathQueryParams:
    name: str = field(default=None, metadata={'query_param': { 'field_name': ':name', 'style': 'form', 'explode': True }})
    jcr_primary_type: str = field(default=None, metadata={'query_param': { 'field_name': 'jcr:primaryType', 'style': 'form', 'explode': True }})
    

@dataclass
class PostPathRequest:
    path_params: PostPathPathParams = field(default=None)
    query_params: PostPathQueryParams = field(default=None)
    

@dataclass
class PostPathResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
