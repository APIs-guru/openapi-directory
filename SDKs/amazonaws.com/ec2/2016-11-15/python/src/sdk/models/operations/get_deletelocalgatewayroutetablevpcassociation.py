from dataclasses import dataclass, field
from typing import Enum,Optional

class GetDeleteLocalGatewayRouteTableVpcAssociationActionEnum(str, Enum):
    DELETE_LOCAL_GATEWAY_ROUTE_TABLE_VPC_ASSOCIATION = "DeleteLocalGatewayRouteTableVpcAssociation"

class GetDeleteLocalGatewayRouteTableVpcAssociationVersionEnum(str, Enum):
    TWO_THOUSAND_AND_SIXTEEN_11_15 = "2016-11-15"


@dataclass
class GetDeleteLocalGatewayRouteTableVpcAssociationQueryParams:
    action: GetDeleteLocalGatewayRouteTableVpcAssociationActionEnum = field(default=None, metadata={'query_param': { 'field_name': 'Action', 'style': 'form', 'explode': True }})
    dry_run: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'DryRun', 'style': 'form', 'explode': True }})
    local_gateway_route_table_vpc_association_id: str = field(default=None, metadata={'query_param': { 'field_name': 'LocalGatewayRouteTableVpcAssociationId', 'style': 'form', 'explode': True }})
    version: GetDeleteLocalGatewayRouteTableVpcAssociationVersionEnum = field(default=None, metadata={'query_param': { 'field_name': 'Version', 'style': 'form', 'explode': True }})
    

@dataclass
class GetDeleteLocalGatewayRouteTableVpcAssociationHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetDeleteLocalGatewayRouteTableVpcAssociationRequest:
    query_params: GetDeleteLocalGatewayRouteTableVpcAssociationQueryParams = field(default=None)
    headers: GetDeleteLocalGatewayRouteTableVpcAssociationHeaders = field(default=None)
    

@dataclass
class GetDeleteLocalGatewayRouteTableVpcAssociationResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
