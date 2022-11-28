from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class CreateRouteResponsePathParams:
    api_id: str = field(metadata={'path_param': { 'field_name': 'apiId', 'style': 'simple', 'explode': False }})
    route_id: str = field(metadata={'path_param': { 'field_name': 'routeId', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateRouteResponseHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class CreateRouteResponseRequestBody:
    route_response_key: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('routeResponseKey') }})
    model_selection_expression: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('modelSelectionExpression') }})
    response_models: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('responseModels') }})
    response_parameters: Optional[dict[str, shared.ParameterConstraints]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('responseParameters') }})
    

@dataclass
class CreateRouteResponseRequest:
    headers: CreateRouteResponseHeaders = field()
    path_params: CreateRouteResponsePathParams = field()
    request: CreateRouteResponseRequestBody = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateRouteResponseResponse:
    content_type: str = field()
    status_code: int = field()
    bad_request_exception: Optional[Any] = field(default=None)
    conflict_exception: Optional[Any] = field(default=None)
    create_route_response_response: Optional[shared.CreateRouteResponseResponse] = field(default=None)
    not_found_exception: Optional[Any] = field(default=None)
    too_many_requests_exception: Optional[Any] = field(default=None)
    
