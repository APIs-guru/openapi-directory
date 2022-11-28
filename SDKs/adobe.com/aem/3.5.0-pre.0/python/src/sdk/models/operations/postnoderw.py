from dataclasses import dataclass, field
from typing import Optional


@dataclass
class PostNodeRwPathParams:
    name: str = field(metadata={'path_param': { 'field_name': 'name', 'style': 'simple', 'explode': False }})
    path: str = field(metadata={'path_param': { 'field_name': 'path', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostNodeRwQueryParams:
    add_members: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'addMembers', 'style': 'form', 'explode': True }})
    

@dataclass
class PostNodeRwRequest:
    path_params: PostNodeRwPathParams = field()
    query_params: PostNodeRwQueryParams = field()
    

@dataclass
class PostNodeRwResponse:
    content_type: str = field()
    status_code: int = field()
    
