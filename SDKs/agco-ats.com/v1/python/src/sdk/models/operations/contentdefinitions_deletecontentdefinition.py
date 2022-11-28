from dataclasses import dataclass, field
from typing import Optional


@dataclass
class ContentDefinitionsDeleteContentDefinitionPathParams:
    content_definition_id: int = field(metadata={'path_param': { 'field_name': 'contentDefinitionID', 'style': 'simple', 'explode': False }})
    

@dataclass
class ContentDefinitionsDeleteContentDefinitionRequest:
    path_params: ContentDefinitionsDeleteContentDefinitionPathParams = field()
    

@dataclass
class ContentDefinitionsDeleteContentDefinitionResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
