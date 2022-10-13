from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import authorizationtype_enum
from . import parameterconstraints


@dataclass_json
@dataclass
class UpdateRouteResult:
    api_gateway_managed: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ApiGatewayManaged' }})
    api_key_required: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ApiKeyRequired' }})
    authorization_scopes: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AuthorizationScopes' }})
    authorization_type: Optional[authorizationtype_enum.AuthorizationTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AuthorizationType' }})
    authorizer_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AuthorizerId' }})
    model_selection_expression: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ModelSelectionExpression' }})
    operation_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OperationName' }})
    request_models: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RequestModels' }})
    request_parameters: Optional[dict[str, parameterconstraints.ParameterConstraints]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RequestParameters' }})
    route_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RouteId' }})
    route_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RouteKey' }})
    route_response_selection_expression: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RouteResponseSelectionExpression' }})
    target: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Target' }})
    
