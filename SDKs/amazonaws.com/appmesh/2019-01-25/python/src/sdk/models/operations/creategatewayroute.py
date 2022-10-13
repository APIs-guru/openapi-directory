from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class CreateGatewayRoutePathParams:
    mesh_name: str = field(default=None, metadata={'path_param': { 'field_name': 'meshName', 'style': 'simple', 'explode': False }})
    virtual_gateway_name: str = field(default=None, metadata={'path_param': { 'field_name': 'virtualGatewayName', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateGatewayRouteQueryParams:
    mesh_owner: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'meshOwner', 'style': 'form', 'explode': True }})
    

@dataclass
class CreateGatewayRouteHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    

@dataclass_json
@dataclass
class CreateGatewayRouteRequestBodySpec:
    grpc_route: Optional[shared.GrpcGatewayRoute] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'grpcRoute' }})
    http2_route: Optional[shared.HTTPGatewayRoute] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'http2Route' }})
    http_route: Optional[shared.HTTPGatewayRoute] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'httpRoute' }})
    priority: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'priority' }})
    

@dataclass_json
@dataclass
class CreateGatewayRouteRequestBody:
    client_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'clientToken' }})
    gateway_route_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gatewayRouteName' }})
    spec: CreateGatewayRouteRequestBodySpec = field(default=None, metadata={'dataclasses_json': { 'field_name': 'spec' }})
    tags: Optional[List[shared.TagRef]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tags' }})
    

@dataclass
class CreateGatewayRouteRequest:
    path_params: CreateGatewayRoutePathParams = field(default=None)
    query_params: CreateGatewayRouteQueryParams = field(default=None)
    headers: CreateGatewayRouteHeaders = field(default=None)
    request: CreateGatewayRouteRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateGatewayRouteResponse:
    bad_request_exception: Optional[Any] = field(default=None)
    conflict_exception: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    create_gateway_route_output: Optional[shared.CreateGatewayRouteOutput] = field(default=None)
    forbidden_exception: Optional[Any] = field(default=None)
    internal_server_error_exception: Optional[Any] = field(default=None)
    limit_exceeded_exception: Optional[Any] = field(default=None)
    not_found_exception: Optional[Any] = field(default=None)
    service_unavailable_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    too_many_requests_exception: Optional[Any] = field(default=None)
    
