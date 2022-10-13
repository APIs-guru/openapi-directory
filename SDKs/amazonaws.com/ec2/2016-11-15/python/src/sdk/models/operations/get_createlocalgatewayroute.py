from dataclasses import dataclass, field
from typing import Enum,Optional

class GetCreateLocalGatewayRouteActionEnum(str, Enum):
    CREATE_LOCAL_GATEWAY_ROUTE = "CreateLocalGatewayRoute"

class GetCreateLocalGatewayRouteVersionEnum(str, Enum):
    TWO_THOUSAND_AND_SIXTEEN_11_15 = "2016-11-15"


@dataclass
class GetCreateLocalGatewayRouteQueryParams:
    action: GetCreateLocalGatewayRouteActionEnum = field(default=None, metadata={'query_param': { 'field_name': 'Action', 'style': 'form', 'explode': True }})
    destination_cidr_block: str = field(default=None, metadata={'query_param': { 'field_name': 'DestinationCidrBlock', 'style': 'form', 'explode': True }})
    dry_run: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'DryRun', 'style': 'form', 'explode': True }})
    local_gateway_route_table_id: str = field(default=None, metadata={'query_param': { 'field_name': 'LocalGatewayRouteTableId', 'style': 'form', 'explode': True }})
    local_gateway_virtual_interface_group_id: str = field(default=None, metadata={'query_param': { 'field_name': 'LocalGatewayVirtualInterfaceGroupId', 'style': 'form', 'explode': True }})
    version: GetCreateLocalGatewayRouteVersionEnum = field(default=None, metadata={'query_param': { 'field_name': 'Version', 'style': 'form', 'explode': True }})
    

@dataclass
class GetCreateLocalGatewayRouteHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    

@dataclass
class GetCreateLocalGatewayRouteRequest:
    query_params: GetCreateLocalGatewayRouteQueryParams = field(default=None)
    headers: GetCreateLocalGatewayRouteHeaders = field(default=None)
    

@dataclass
class GetCreateLocalGatewayRouteResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
