from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class RouteResponse:
    r"""RouteResponse
    Represents a route response.
    """
    
    route_response_key: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('RouteResponseKey') }})
    model_selection_expression: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ModelSelectionExpression') }})
    response_models: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ResponseModels') }})
    response_parameters: Optional[dict[str, ParameterConstraints]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ResponseParameters') }})
    route_response_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RouteResponseId') }})
    
