from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum

class GetCreateVpnConnectionRouteActionEnum(str, Enum):
    CREATE_VPN_CONNECTION_ROUTE = "CreateVpnConnectionRoute"

class GetCreateVpnConnectionRouteVersionEnum(str, Enum):
    TWO_THOUSAND_AND_SIXTEEN_11_15 = "2016-11-15"


@dataclass
class GetCreateVpnConnectionRouteQueryParams:
    action: GetCreateVpnConnectionRouteActionEnum = field(metadata={'query_param': { 'field_name': 'Action', 'style': 'form', 'explode': True }})
    destination_cidr_block: str = field(metadata={'query_param': { 'field_name': 'DestinationCidrBlock', 'style': 'form', 'explode': True }})
    version: GetCreateVpnConnectionRouteVersionEnum = field(metadata={'query_param': { 'field_name': 'Version', 'style': 'form', 'explode': True }})
    vpn_connection_id: str = field(metadata={'query_param': { 'field_name': 'VpnConnectionId', 'style': 'form', 'explode': True }})
    

@dataclass
class GetCreateVpnConnectionRouteHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetCreateVpnConnectionRouteRequest:
    headers: GetCreateVpnConnectionRouteHeaders = field()
    query_params: GetCreateVpnConnectionRouteQueryParams = field()
    

@dataclass
class GetCreateVpnConnectionRouteResponse:
    content_type: str = field()
    status_code: int = field()
    
