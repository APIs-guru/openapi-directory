from dataclasses import dataclass, field
from typing import Optional


@dataclass
class PostSetPasswordQueryParams:
    old: str = field(metadata={'query_param': { 'field_name': 'old', 'style': 'form', 'explode': True }})
    plain: str = field(metadata={'query_param': { 'field_name': 'plain', 'style': 'form', 'explode': True }})
    verify: str = field(metadata={'query_param': { 'field_name': 'verify', 'style': 'form', 'explode': True }})
    

@dataclass
class PostSetPasswordRequest:
    query_params: PostSetPasswordQueryParams = field()
    

@dataclass
class PostSetPasswordResponse:
    content_type: str = field()
    status_code: int = field()
    post_set_password_default_text_plain_string: Optional[str] = field(default=None)
    
