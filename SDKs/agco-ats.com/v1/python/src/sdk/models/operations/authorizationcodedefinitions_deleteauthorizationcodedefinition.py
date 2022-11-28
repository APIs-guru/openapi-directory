from dataclasses import dataclass, field
from typing import Optional


@dataclass
class AuthorizationCodeDefinitionsDeleteAuthorizationCodeDefinitionPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class AuthorizationCodeDefinitionsDeleteAuthorizationCodeDefinitionRequest:
    path_params: AuthorizationCodeDefinitionsDeleteAuthorizationCodeDefinitionPathParams = field()
    

@dataclass
class AuthorizationCodeDefinitionsDeleteAuthorizationCodeDefinitionResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
