from dataclasses import dataclass, field
from typing import Optional


@dataclass
class UserContentDefinitionsDeleteUserContentDefinitionPathParams:
    user_content_definition_id: int = field(metadata={'path_param': { 'field_name': 'userContentDefinitionID', 'style': 'simple', 'explode': False }})
    

@dataclass
class UserContentDefinitionsDeleteUserContentDefinitionRequest:
    path_params: UserContentDefinitionsDeleteUserContentDefinitionPathParams = field()
    

@dataclass
class UserContentDefinitionsDeleteUserContentDefinitionResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
