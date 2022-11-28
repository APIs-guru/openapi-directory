from dataclasses import dataclass, field
from typing import Optional


@dataclass
class PostConfigApacheSlingDavExServletQueryParams:
    alias: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'alias', 'style': 'form', 'explode': True }})
    alias_at_type_hint: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'alias@TypeHint', 'style': 'form', 'explode': True }})
    dav_create_absolute_uri: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'dav.create-absolute-uri', 'style': 'form', 'explode': True }})
    dav_create_absolute_uri_at_type_hint: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'dav.create-absolute-uri@TypeHint', 'style': 'form', 'explode': True }})
    

@dataclass
class PostConfigApacheSlingDavExServletRequest:
    query_params: PostConfigApacheSlingDavExServletQueryParams = field()
    

@dataclass
class PostConfigApacheSlingDavExServletResponse:
    content_type: str = field()
    status_code: int = field()
    
