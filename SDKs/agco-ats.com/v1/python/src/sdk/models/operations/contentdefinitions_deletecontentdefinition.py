from dataclasses import dataclass, field



@dataclass
class ContentDefinitionsDeleteContentDefinitionPathParams:
    content_definition_id: int = field(default=None, metadata={'path_param': { 'field_name': 'contentDefinitionID', 'style': 'simple', 'explode': False }})
    

@dataclass
class ContentDefinitionsDeleteContentDefinitionRequest:
    path_params: ContentDefinitionsDeleteContentDefinitionPathParams = field(default=None)
    

@dataclass
class ContentDefinitionsDeleteContentDefinitionResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
