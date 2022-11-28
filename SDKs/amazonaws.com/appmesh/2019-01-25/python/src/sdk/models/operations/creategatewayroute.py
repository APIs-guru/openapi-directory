from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class CreateGatewayRoutePathParams:
    mesh_name: str = field(metadata={'path_param': { 'field_name': 'meshName', 'style': 'simple', 'explode': False }})
    virtual_gateway_name: str = field(metadata={'path_param': { 'field_name': 'virtualGatewayName', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateGatewayRouteQueryParams:
    mesh_owner: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'meshOwner', 'style': 'form', 'explode': True }})
    

@dataclass
class CreateGatewayRouteHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class CreateGatewayRouteRequestBodySpec:
    r"""CreateGatewayRouteRequestBodySpec
    An object that represents a gateway route specification. Specify one gateway route type.
    """
    
    grpc_route: Optional[shared.GrpcGatewayRoute] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('grpcRoute') }})
    http2_route: Optional[shared.HTTPGatewayRoute] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('http2Route') }})
    http_route: Optional[shared.HTTPGatewayRoute] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('httpRoute') }})
    priority: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('priority') }})
    

@dataclass_json
@dataclass
class CreateGatewayRouteRequestBody:
    gateway_route_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('gatewayRouteName') }})
    spec: CreateGatewayRouteRequestBodySpec = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('spec') }})
    client_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('clientToken') }})
    tags: Optional[List[shared.TagRef]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    

@dataclass
class CreateGatewayRouteRequest:
    headers: CreateGatewayRouteHeaders = field()
    path_params: CreateGatewayRoutePathParams = field()
    query_params: CreateGatewayRouteQueryParams = field()
    request: CreateGatewayRouteRequestBody = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateGatewayRouteResponse:
    content_type: str = field()
    status_code: int = field()
    bad_request_exception: Optional[Any] = field(default=None)
    conflict_exception: Optional[Any] = field(default=None)
    create_gateway_route_output: Optional[shared.CreateGatewayRouteOutput] = field(default=None)
    forbidden_exception: Optional[Any] = field(default=None)
    internal_server_error_exception: Optional[Any] = field(default=None)
    limit_exceeded_exception: Optional[Any] = field(default=None)
    not_found_exception: Optional[Any] = field(default=None)
    service_unavailable_exception: Optional[Any] = field(default=None)
    too_many_requests_exception: Optional[Any] = field(default=None)
    
