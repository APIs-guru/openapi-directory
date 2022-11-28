from dataclasses import dataclass, field



@dataclass
class PostPathPathParams:
    path: str = field(metadata={'path_param': { 'field_name': 'path', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostPathQueryParams:
    name: str = field(metadata={'query_param': { 'field_name': ':name', 'style': 'form', 'explode': True }})
    jcr_primary_type: str = field(metadata={'query_param': { 'field_name': 'jcr:primaryType', 'style': 'form', 'explode': True }})
    

@dataclass
class PostPathRequest:
    path_params: PostPathPathParams = field()
    query_params: PostPathQueryParams = field()
    

@dataclass
class PostPathResponse:
    content_type: str = field()
    status_code: int = field()
    
