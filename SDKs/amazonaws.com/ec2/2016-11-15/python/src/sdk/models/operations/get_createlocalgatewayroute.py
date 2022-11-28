from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum

class GetCreateLocalGatewayRouteActionEnum(str, Enum):
    CREATE_LOCAL_GATEWAY_ROUTE = "CreateLocalGatewayRoute"

class GetCreateLocalGatewayRouteVersionEnum(str, Enum):
    TWO_THOUSAND_AND_SIXTEEN_11_15 = "2016-11-15"


@dataclass
class GetCreateLocalGatewayRouteQueryParams:
    action: GetCreateLocalGatewayRouteActionEnum = field(metadata={'query_param': { 'field_name': 'Action', 'style': 'form', 'explode': True }})
    destination_cidr_block: str = field(metadata={'query_param': { 'field_name': 'DestinationCidrBlock', 'style': 'form', 'explode': True }})
    local_gateway_route_table_id: str = field(metadata={'query_param': { 'field_name': 'LocalGatewayRouteTableId', 'style': 'form', 'explode': True }})
    local_gateway_virtual_interface_group_id: str = field(metadata={'query_param': { 'field_name': 'LocalGatewayVirtualInterfaceGroupId', 'style': 'form', 'explode': True }})
    version: GetCreateLocalGatewayRouteVersionEnum = field(metadata={'query_param': { 'field_name': 'Version', 'style': 'form', 'explode': True }})
    dry_run: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'DryRun', 'style': 'form', 'explode': True }})
    

@dataclass
class GetCreateLocalGatewayRouteHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetCreateLocalGatewayRouteRequest:
    headers: GetCreateLocalGatewayRouteHeaders = field()
    query_params: GetCreateLocalGatewayRouteQueryParams = field()
    

@dataclass
class GetCreateLocalGatewayRouteResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
