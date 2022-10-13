from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import parameterconstraints


@dataclass_json
@dataclass
class CreateRouteResponseResponse:
    model_selection_expression: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ModelSelectionExpression' }})
    response_models: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ResponseModels' }})
    response_parameters: Optional[dict[str, parameterconstraints.ParameterConstraints]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ResponseParameters' }})
    route_response_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RouteResponseId' }})
    route_response_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RouteResponseKey' }})
    
