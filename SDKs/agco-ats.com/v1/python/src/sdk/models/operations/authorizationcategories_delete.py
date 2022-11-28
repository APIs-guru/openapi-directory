from dataclasses import dataclass, field
from typing import Optional


@dataclass
class AuthorizationCategoriesDeletePathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class AuthorizationCategoriesDeleteRequest:
    path_params: AuthorizationCategoriesDeletePathParams = field()
    

@dataclass
class AuthorizationCategoriesDeleteResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
