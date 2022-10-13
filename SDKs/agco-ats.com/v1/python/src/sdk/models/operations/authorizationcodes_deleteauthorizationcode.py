from dataclasses import dataclass, field



@dataclass
class AuthorizationCodesDeleteAuthorizationCodePathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class AuthorizationCodesDeleteAuthorizationCodeRequest:
    path_params: AuthorizationCodesDeleteAuthorizationCodePathParams = field(default=None)
    

@dataclass
class AuthorizationCodesDeleteAuthorizationCodeResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
