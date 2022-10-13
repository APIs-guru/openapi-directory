from dataclasses import dataclass, field



@dataclass
class AuthorizationCategoriesDeletePathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class AuthorizationCategoriesDeleteRequest:
    path_params: AuthorizationCategoriesDeletePathParams = field(default=None)
    

@dataclass
class AuthorizationCategoriesDeleteResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
