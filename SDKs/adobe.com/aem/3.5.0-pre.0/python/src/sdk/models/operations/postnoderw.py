from dataclasses import dataclass, field
from typing import Optional


@dataclass
class PostNodeRwPathParams:
    name: str = field(default=None, metadata={'path_param': { 'field_name': 'name', 'style': 'simple', 'explode': False }})
    path: str = field(default=None, metadata={'path_param': { 'field_name': 'path', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostNodeRwQueryParams:
    add_members: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'addMembers', 'style': 'form', 'explode': True }})
    

@dataclass
class PostNodeRwRequest:
    path_params: PostNodeRwPathParams = field(default=None)
    query_params: PostNodeRwQueryParams = field(default=None)
    

@dataclass
class PostNodeRwResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
