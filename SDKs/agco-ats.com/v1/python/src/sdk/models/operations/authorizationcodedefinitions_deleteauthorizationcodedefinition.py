from dataclasses import dataclass, field



@dataclass
class AuthorizationCodeDefinitionsDeleteAuthorizationCodeDefinitionPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class AuthorizationCodeDefinitionsDeleteAuthorizationCodeDefinitionRequest:
    path_params: AuthorizationCodeDefinitionsDeleteAuthorizationCodeDefinitionPathParams = field(default=None)
    

@dataclass
class AuthorizationCodeDefinitionsDeleteAuthorizationCodeDefinitionResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
