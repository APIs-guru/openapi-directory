from dataclasses import dataclass, field
from typing import Optional


@dataclass
class AuthorizationCategoriesAddUserPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    user_id: int = field(metadata={'path_param': { 'field_name': 'userID', 'style': 'simple', 'explode': False }})
    

@dataclass
class AuthorizationCategoriesAddUserRequest:
    path_params: AuthorizationCategoriesAddUserPathParams = field()
    

@dataclass
class AuthorizationCategoriesAddUserResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
