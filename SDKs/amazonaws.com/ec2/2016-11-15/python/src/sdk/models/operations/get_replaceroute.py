from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum

class GetReplaceRouteActionEnum(str, Enum):
    REPLACE_ROUTE = "ReplaceRoute"

class GetReplaceRouteVersionEnum(str, Enum):
    TWO_THOUSAND_AND_SIXTEEN_11_15 = "2016-11-15"


@dataclass
class GetReplaceRouteQueryParams:
    action: GetReplaceRouteActionEnum = field(metadata={'query_param': { 'field_name': 'Action', 'style': 'form', 'explode': True }})
    route_table_id: str = field(metadata={'query_param': { 'field_name': 'RouteTableId', 'style': 'form', 'explode': True }})
    version: GetReplaceRouteVersionEnum = field(metadata={'query_param': { 'field_name': 'Version', 'style': 'form', 'explode': True }})
    carrier_gateway_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'CarrierGatewayId', 'style': 'form', 'explode': True }})
    destination_cidr_block: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'DestinationCidrBlock', 'style': 'form', 'explode': True }})
    destination_ipv6_cidr_block: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'DestinationIpv6CidrBlock', 'style': 'form', 'explode': True }})
    destination_prefix_list_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'DestinationPrefixListId', 'style': 'form', 'explode': True }})
    dry_run: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'DryRun', 'style': 'form', 'explode': True }})
    egress_only_internet_gateway_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'EgressOnlyInternetGatewayId', 'style': 'form', 'explode': True }})
    gateway_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'GatewayId', 'style': 'form', 'explode': True }})
    instance_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'InstanceId', 'style': 'form', 'explode': True }})
    local_gateway_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'LocalGatewayId', 'style': 'form', 'explode': True }})
    local_target: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'LocalTarget', 'style': 'form', 'explode': True }})
    nat_gateway_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'NatGatewayId', 'style': 'form', 'explode': True }})
    network_interface_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'NetworkInterfaceId', 'style': 'form', 'explode': True }})
    transit_gateway_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'TransitGatewayId', 'style': 'form', 'explode': True }})
    vpc_endpoint_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'VpcEndpointId', 'style': 'form', 'explode': True }})
    vpc_peering_connection_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'VpcPeeringConnectionId', 'style': 'form', 'explode': True }})
    

@dataclass
class GetReplaceRouteHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetReplaceRouteRequest:
    headers: GetReplaceRouteHeaders = field()
    query_params: GetReplaceRouteQueryParams = field()
    

@dataclass
class GetReplaceRouteResponse:
    content_type: str = field()
    status_code: int = field()
    
