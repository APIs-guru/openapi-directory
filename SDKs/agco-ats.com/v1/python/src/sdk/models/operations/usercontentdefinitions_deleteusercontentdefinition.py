from dataclasses import dataclass, field



@dataclass
class UserContentDefinitionsDeleteUserContentDefinitionPathParams:
    user_content_definition_id: int = field(default=None, metadata={'path_param': { 'field_name': 'userContentDefinitionID', 'style': 'simple', 'explode': False }})
    

@dataclass
class UserContentDefinitionsDeleteUserContentDefinitionRequest:
    path_params: UserContentDefinitionsDeleteUserContentDefinitionPathParams = field(default=None)
    

@dataclass
class UserContentDefinitionsDeleteUserContentDefinitionResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
