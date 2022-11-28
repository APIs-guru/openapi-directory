from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class UpdateRouteResponsePathParams:
    api_id: str = field(metadata={'path_param': { 'field_name': 'apiId', 'style': 'simple', 'explode': False }})
    route_id: str = field(metadata={'path_param': { 'field_name': 'routeId', 'style': 'simple', 'explode': False }})
    route_response_id: str = field(metadata={'path_param': { 'field_name': 'routeResponseId', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateRouteResponseHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class UpdateRouteResponseRequestBody:
    model_selection_expression: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('modelSelectionExpression') }})
    response_models: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('responseModels') }})
    response_parameters: Optional[dict[str, shared.ParameterConstraints]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('responseParameters') }})
    route_response_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('routeResponseKey') }})
    

@dataclass
class UpdateRouteResponseRequest:
    headers: UpdateRouteResponseHeaders = field()
    path_params: UpdateRouteResponsePathParams = field()
    request: UpdateRouteResponseRequestBody = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateRouteResponseResponse:
    content_type: str = field()
    status_code: int = field()
    bad_request_exception: Optional[Any] = field(default=None)
    conflict_exception: Optional[Any] = field(default=None)
    not_found_exception: Optional[Any] = field(default=None)
    too_many_requests_exception: Optional[Any] = field(default=None)
    update_route_response_response: Optional[shared.UpdateRouteResponseResponse] = field(default=None)
    
