from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import contenthandlingstrategy_enum


@dataclass_json
@dataclass
class IntegrationResponse:
    content_handling: Optional[contenthandlingstrategy_enum.ContentHandlingStrategyEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'contentHandling' }})
    response_parameters: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'responseParameters' }})
    response_templates: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'responseTemplates' }})
    selection_pattern: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'selectionPattern' }})
    status_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'statusCode' }})
    
