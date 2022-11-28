from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class UpdateRouteResponseResponse:
    model_selection_expression: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ModelSelectionExpression') }})
    response_models: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ResponseModels') }})
    response_parameters: Optional[dict[str, ParameterConstraints]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ResponseParameters') }})
    route_response_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RouteResponseId') }})
    route_response_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RouteResponseKey') }})
    
