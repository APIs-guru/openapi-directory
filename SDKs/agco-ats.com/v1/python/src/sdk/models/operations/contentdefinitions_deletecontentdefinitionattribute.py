from dataclasses import dataclass, field



@dataclass
class ContentDefinitionsDeleteContentDefinitionAttributePathParams:
    content_definition_attribute_id: int = field(default=None, metadata={'path_param': { 'field_name': 'contentDefinitionAttributeID', 'style': 'simple', 'explode': False }})
    

@dataclass
class ContentDefinitionsDeleteContentDefinitionAttributeRequest:
    path_params: ContentDefinitionsDeleteContentDefinitionAttributePathParams = field(default=None)
    

@dataclass
class ContentDefinitionsDeleteContentDefinitionAttributeResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
