from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class UpdateRouteResponsePathParams:
    api_id: str = field(default=None, metadata={'path_param': { 'field_name': 'apiId', 'style': 'simple', 'explode': False }})
    route_id: str = field(default=None, metadata={'path_param': { 'field_name': 'routeId', 'style': 'simple', 'explode': False }})
    route_response_id: str = field(default=None, metadata={'path_param': { 'field_name': 'routeResponseId', 'style': 'simple', 'explode': False }})
    

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
    model_selection_expression: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'modelSelectionExpression' }})
    response_models: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'responseModels' }})
    response_parameters: Optional[dict[str, shared.ParameterConstraints]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'responseParameters' }})
    route_response_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'routeResponseKey' }})
    

@dataclass
class UpdateRouteResponseRequest:
    path_params: UpdateRouteResponsePathParams = field(default=None)
    headers: UpdateRouteResponseHeaders = field(default=None)
    request: UpdateRouteResponseRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateRouteResponseResponse:
    bad_request_exception: Optional[Any] = field(default=None)
    conflict_exception: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    not_found_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    too_many_requests_exception: Optional[Any] = field(default=None)
    update_route_response_response: Optional[shared.UpdateRouteResponseResponse] = field(default=None)
    
