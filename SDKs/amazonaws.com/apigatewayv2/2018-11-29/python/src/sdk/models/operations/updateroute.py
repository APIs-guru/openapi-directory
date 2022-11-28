from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class UpdateRoutePathParams:
    api_id: str = field(metadata={'path_param': { 'field_name': 'apiId', 'style': 'simple', 'explode': False }})
    route_id: str = field(metadata={'path_param': { 'field_name': 'routeId', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateRouteHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    
class UpdateRouteRequestBodyAuthorizationTypeEnum(str, Enum):
    NONE = "NONE"
    AWS_IAM = "AWS_IAM"
    CUSTOM = "CUSTOM"
    JWT = "JWT"


@dataclass_json
@dataclass
class UpdateRouteRequestBody:
    api_key_required: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('apiKeyRequired') }})
    authorization_scopes: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('authorizationScopes') }})
    authorization_type: Optional[UpdateRouteRequestBodyAuthorizationTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('authorizationType') }})
    authorizer_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('authorizerId') }})
    model_selection_expression: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('modelSelectionExpression') }})
    operation_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('operationName') }})
    request_models: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('requestModels') }})
    request_parameters: Optional[dict[str, shared.ParameterConstraints]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('requestParameters') }})
    route_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('routeKey') }})
    route_response_selection_expression: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('routeResponseSelectionExpression') }})
    target: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('target') }})
    

@dataclass
class UpdateRouteRequest:
    headers: UpdateRouteHeaders = field()
    path_params: UpdateRoutePathParams = field()
    request: UpdateRouteRequestBody = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateRouteResponse:
    content_type: str = field()
    status_code: int = field()
    bad_request_exception: Optional[Any] = field(default=None)
    conflict_exception: Optional[Any] = field(default=None)
    not_found_exception: Optional[Any] = field(default=None)
    too_many_requests_exception: Optional[Any] = field(default=None)
    update_route_result: Optional[shared.UpdateRouteResult] = field(default=None)
    
