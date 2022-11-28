from dataclasses import dataclass, field
from typing import Optional


@dataclass
class AuthorizationCodesDeleteAuthorizationCodePathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class AuthorizationCodesDeleteAuthorizationCodeRequest:
    path_params: AuthorizationCodesDeleteAuthorizationCodePathParams = field()
    

@dataclass
class AuthorizationCodesDeleteAuthorizationCodeResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
