from dataclasses import dataclass, field
from typing import Enum,List,Optional

class GetCreateTransitGatewayPrefixListReferenceActionEnum(str, Enum):
    CREATE_TRANSIT_GATEWAY_PREFIX_LIST_REFERENCE = "CreateTransitGatewayPrefixListReference"

class GetCreateTransitGatewayPrefixListReferenceVersionEnum(str, Enum):
    TWO_THOUSAND_AND_SIXTEEN_11_15 = "2016-11-15"


@dataclass
class GetCreateTransitGatewayPrefixListReferenceQueryParams:
    action: GetCreateTransitGatewayPrefixListReferenceActionEnum = field(default=None, metadata={'query_param': { 'field_name': 'Action', 'style': 'form', 'explode': True }})
    blackhole: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'Blackhole', 'style': 'form', 'explode': True }})
    dry_run: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'DryRun', 'style': 'form', 'explode': True }})
    prefix_list_id: str = field(default=None, metadata={'query_param': { 'field_name': 'PrefixListId', 'style': 'form', 'explode': True }})
    transit_gateway_attachment_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'TransitGatewayAttachmentId', 'style': 'form', 'explode': True }})
    transit_gateway_route_table_id: str = field(default=None, metadata={'query_param': { 'field_name': 'TransitGatewayRouteTableId', 'style': 'form', 'explode': True }})
    version: GetCreateTransitGatewayPrefixListReferenceVersionEnum = field(default=None, metadata={'query_param': { 'field_name': 'Version', 'style': 'form', 'explode': True }})
    

@dataclass
class GetCreateTransitGatewayPrefixListReferenceHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetCreateTransitGatewayPrefixListReferenceRequest:
    query_params: GetCreateTransitGatewayPrefixListReferenceQueryParams = field(default=None)
    headers: GetCreateTransitGatewayPrefixListReferenceHeaders = field(default=None)
    

@dataclass
class GetCreateTransitGatewayPrefixListReferenceResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
