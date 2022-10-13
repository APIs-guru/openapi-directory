from dataclasses import dataclass, field



@dataclass
class AuthorizationCodeDefinitionsAddCategoryToDefinitionPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'ID', 'style': 'simple', 'explode': False }})
    category_id: str = field(default=None, metadata={'path_param': { 'field_name': 'categoryID', 'style': 'simple', 'explode': False }})
    

@dataclass
class AuthorizationCodeDefinitionsAddCategoryToDefinitionRequest:
    path_params: AuthorizationCodeDefinitionsAddCategoryToDefinitionPathParams = field(default=None)
    

@dataclass
class AuthorizationCodeDefinitionsAddCategoryToDefinitionResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
