from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class UpdateRoutePathParams:
    mesh_name: str = field(default=None, metadata={'path_param': { 'field_name': 'meshName', 'style': 'simple', 'explode': False }})
    route_name: str = field(default=None, metadata={'path_param': { 'field_name': 'routeName', 'style': 'simple', 'explode': False }})
    virtual_router_name: str = field(default=None, metadata={'path_param': { 'field_name': 'virtualRouterName', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateRouteQueryParams:
    mesh_owner: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'meshOwner', 'style': 'form', 'explode': True }})
    

@dataclass
class UpdateRouteHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    

@dataclass_json
@dataclass
class UpdateRouteRequestBodySpec:
    grpc_route: Optional[shared.GrpcRoute] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'grpcRoute' }})
    http2_route: Optional[shared.HTTPRoute] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'http2Route' }})
    http_route: Optional[shared.HTTPRoute] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'httpRoute' }})
    priority: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'priority' }})
    tcp_route: Optional[shared.TCPRoute] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tcpRoute' }})
    

@dataclass_json
@dataclass
class UpdateRouteRequestBody:
    client_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'clientToken' }})
    spec: UpdateRouteRequestBodySpec = field(default=None, metadata={'dataclasses_json': { 'field_name': 'spec' }})
    

@dataclass
class UpdateRouteRequest:
    path_params: UpdateRoutePathParams = field(default=None)
    query_params: UpdateRouteQueryParams = field(default=None)
    headers: UpdateRouteHeaders = field(default=None)
    request: UpdateRouteRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateRouteResponse:
    bad_request_exception: Optional[Any] = field(default=None)
    conflict_exception: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    forbidden_exception: Optional[Any] = field(default=None)
    internal_server_error_exception: Optional[Any] = field(default=None)
    limit_exceeded_exception: Optional[Any] = field(default=None)
    not_found_exception: Optional[Any] = field(default=None)
    service_unavailable_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    too_many_requests_exception: Optional[Any] = field(default=None)
    update_route_output: Optional[shared.UpdateRouteOutput] = field(default=None)
    
