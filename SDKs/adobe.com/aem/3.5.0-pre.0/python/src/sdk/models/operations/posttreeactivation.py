from dataclasses import dataclass, field



@dataclass
class PostTreeActivationQueryParams:
    ignoredeactivated: bool = field(default=None, metadata={'query_param': { 'field_name': 'ignoredeactivated', 'style': 'form', 'explode': True }})
    onlymodified: bool = field(default=None, metadata={'query_param': { 'field_name': 'onlymodified', 'style': 'form', 'explode': True }})
    path: str = field(default=None, metadata={'query_param': { 'field_name': 'path', 'style': 'form', 'explode': True }})
    

@dataclass
class PostTreeActivationRequest:
    query_params: PostTreeActivationQueryParams = field(default=None)
    

@dataclass
class PostTreeActivationResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
