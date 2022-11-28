from dataclasses import dataclass, field
from typing import Optional


@dataclass
class AuthorizationCodeDefinitionsRemoveCategoryFromDefinitionPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'ID', 'style': 'simple', 'explode': False }})
    category_id: str = field(metadata={'path_param': { 'field_name': 'categoryID', 'style': 'simple', 'explode': False }})
    

@dataclass
class AuthorizationCodeDefinitionsRemoveCategoryFromDefinitionRequest:
    path_params: AuthorizationCodeDefinitionsRemoveCategoryFromDefinitionPathParams = field()
    

@dataclass
class AuthorizationCodeDefinitionsRemoveCategoryFromDefinitionResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
