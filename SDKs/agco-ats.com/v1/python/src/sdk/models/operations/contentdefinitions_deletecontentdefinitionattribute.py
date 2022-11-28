from dataclasses import dataclass, field
from typing import Optional


@dataclass
class ContentDefinitionsDeleteContentDefinitionAttributePathParams:
    content_definition_attribute_id: int = field(metadata={'path_param': { 'field_name': 'contentDefinitionAttributeID', 'style': 'simple', 'explode': False }})
    

@dataclass
class ContentDefinitionsDeleteContentDefinitionAttributeRequest:
    path_params: ContentDefinitionsDeleteContentDefinitionAttributePathParams = field()
    

@dataclass
class ContentDefinitionsDeleteContentDefinitionAttributeResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
