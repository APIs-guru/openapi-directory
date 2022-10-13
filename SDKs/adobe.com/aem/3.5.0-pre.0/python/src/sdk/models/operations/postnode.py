from dataclasses import dataclass, field
from typing import Optional


@dataclass
class PostNodePathParams:
    name: str = field(default=None, metadata={'path_param': { 'field_name': 'name', 'style': 'simple', 'explode': False }})
    path: str = field(default=None, metadata={'path_param': { 'field_name': 'path', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostNodeQueryParams:
    operation: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': ':operation', 'style': 'form', 'explode': True }})
    delete_authorizable: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'deleteAuthorizable', 'style': 'form', 'explode': True }})
    

@dataclass
class PostNodeRequestBodyFile:
    content: bytes = field(default=None, metadata={'multipart_form': { 'content': True }})
    file: str = field(default=None, metadata={'multipart_form': { 'field_name': 'file' }})
    

@dataclass
class PostNodeRequestBody:
    file: Optional[PostNodeRequestBodyFile] = field(default=None, metadata={'multipart_form': { 'file': True }})
    

@dataclass
class PostNodeRequest:
    path_params: PostNodePathParams = field(default=None)
    query_params: PostNodeQueryParams = field(default=None)
    request: Optional[PostNodeRequestBody] = field(default=None, metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclass
class PostNodeResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
