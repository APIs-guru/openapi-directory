from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class UpdateIntegrationResponseResponse:
    content_handling_strategy: Optional[ContentHandlingStrategyEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ContentHandlingStrategy') }})
    integration_response_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IntegrationResponseId') }})
    integration_response_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IntegrationResponseKey') }})
    response_parameters: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ResponseParameters') }})
    response_templates: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ResponseTemplates') }})
    template_selection_expression: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TemplateSelectionExpression') }})
    
