from dataclasses import dataclass, field
from typing import Enum,List,Optional

class GetCreateRouteActionEnum(str, Enum):
    CREATE_ROUTE = "CreateRoute"

class GetCreateRouteVersionEnum(str, Enum):
    TWO_THOUSAND_AND_SIXTEEN_11_15 = "2016-11-15"


@dataclass
class GetCreateRouteQueryParams:
    action: GetCreateRouteActionEnum = field(default=None, metadata={'query_param': { 'field_name': 'Action', 'style': 'form', 'explode': True }})
    carrier_gateway_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'CarrierGatewayId', 'style': 'form', 'explode': True }})
    destination_cidr_block: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'DestinationCidrBlock', 'style': 'form', 'explode': True }})
    destination_ipv6_cidr_block: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'DestinationIpv6CidrBlock', 'style': 'form', 'explode': True }})
    destination_prefix_list_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'DestinationPrefixListId', 'style': 'form', 'explode': True }})
    dry_run: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'DryRun', 'style': 'form', 'explode': True }})
    egress_only_internet_gateway_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'EgressOnlyInternetGatewayId', 'style': 'form', 'explode': True }})
    gateway_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'GatewayId', 'style': 'form', 'explode': True }})
    instance_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'InstanceId', 'style': 'form', 'explode': True }})
    local_gateway_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'LocalGatewayId', 'style': 'form', 'explode': True }})
    nat_gateway_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'NatGatewayId', 'style': 'form', 'explode': True }})
    network_interface_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'NetworkInterfaceId', 'style': 'form', 'explode': True }})
    route_table_id: str = field(default=None, metadata={'query_param': { 'field_name': 'RouteTableId', 'style': 'form', 'explode': True }})
    transit_gateway_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'TransitGatewayId', 'style': 'form', 'explode': True }})
    version: GetCreateRouteVersionEnum = field(default=None, metadata={'query_param': { 'field_name': 'Version', 'style': 'form', 'explode': True }})
    vpc_endpoint_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'VpcEndpointId', 'style': 'form', 'explode': True }})
    vpc_peering_connection_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'VpcPeeringConnectionId', 'style': 'form', 'explode': True }})
    

@dataclass
class GetCreateRouteHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    

@dataclass
class GetCreateRouteRequest:
    query_params: GetCreateRouteQueryParams = field(default=None)
    headers: GetCreateRouteHeaders = field(default=None)
    

@dataclass
class GetCreateRouteResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
