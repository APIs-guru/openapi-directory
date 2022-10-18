from dataclasses import dataclass, field



@dataclass
class PostSetPasswordQueryParams:
    old: str = field(default=None, metadata={'query_param': { 'field_name': 'old', 'style': 'form', 'explode': True }})
    plain: str = field(default=None, metadata={'query_param': { 'field_name': 'plain', 'style': 'form', 'explode': True }})
    verify: str = field(default=None, metadata={'query_param': { 'field_name': 'verify', 'style': 'form', 'explode': True }})
    

@dataclass
class PostSetPasswordRequest:
    query_params: PostSetPasswordQueryParams = field(default=None)
    

@dataclass
class PostSetPasswordResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
