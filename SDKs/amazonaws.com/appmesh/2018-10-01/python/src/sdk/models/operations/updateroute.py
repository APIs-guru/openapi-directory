from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class UpdateRoutePathParams:
    mesh_name: str = field(metadata={'path_param': { 'field_name': 'meshName', 'style': 'simple', 'explode': False }})
    route_name: str = field(metadata={'path_param': { 'field_name': 'routeName', 'style': 'simple', 'explode': False }})
    virtual_router_name: str = field(metadata={'path_param': { 'field_name': 'virtualRouterName', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateRouteHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class UpdateRouteRequestBodySpec:
    r"""UpdateRouteRequestBodySpec
    An object representing the specification of a route.
    """
    
    http_route: Optional[shared.HTTPRoute] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('httpRoute') }})
    

@dataclass_json
@dataclass
class UpdateRouteRequestBody:
    spec: UpdateRouteRequestBodySpec = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('spec') }})
    client_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('clientToken') }})
    

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
    forbidden_exception: Optional[Any] = field(default=None)
    internal_server_error_exception: Optional[Any] = field(default=None)
    limit_exceeded_exception: Optional[Any] = field(default=None)
    not_found_exception: Optional[Any] = field(default=None)
    service_unavailable_exception: Optional[Any] = field(default=None)
    too_many_requests_exception: Optional[Any] = field(default=None)
    update_route_output: Optional[shared.UpdateRouteOutput] = field(default=None)
    
