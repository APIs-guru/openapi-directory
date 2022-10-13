from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import contenthandlingstrategy_enum


@dataclass_json
@dataclass
class GetIntegrationResponseResponse:
    content_handling_strategy: Optional[contenthandlingstrategy_enum.ContentHandlingStrategyEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ContentHandlingStrategy' }})
    integration_response_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IntegrationResponseId' }})
    integration_response_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IntegrationResponseKey' }})
    response_parameters: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ResponseParameters' }})
    response_templates: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ResponseTemplates' }})
    template_selection_expression: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TemplateSelectionExpression' }})
    
