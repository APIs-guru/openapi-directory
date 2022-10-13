from dataclasses import dataclass, field
from typing import Enum,List,Optional
from sdk.models import shared

class GetModifyTransitGatewayActionEnum(str, Enum):
    MODIFY_TRANSIT_GATEWAY = "ModifyTransitGateway"


@dataclass
class GetModifyTransitGatewayOptions:
    add_transit_gateway_cidr_blocks: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'AddTransitGatewayCidrBlocks' }})
    association_default_route_table_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'AssociationDefaultRouteTableId' }})
    auto_accept_shared_attachments: Optional[shared.AutoAcceptSharedAttachmentsValueEnum] = field(default=None, metadata={'query_param': { 'field_name': 'AutoAcceptSharedAttachments' }})
    default_route_table_association: Optional[shared.DefaultRouteTableAssociationValueEnum] = field(default=None, metadata={'query_param': { 'field_name': 'DefaultRouteTableAssociation' }})
    default_route_table_propagation: Optional[shared.DefaultRouteTablePropagationValueEnum] = field(default=None, metadata={'query_param': { 'field_name': 'DefaultRouteTablePropagation' }})
    dns_support: Optional[shared.DNSSupportValueEnum] = field(default=None, metadata={'query_param': { 'field_name': 'DnsSupport' }})
    propagation_default_route_table_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'PropagationDefaultRouteTableId' }})
    remove_transit_gateway_cidr_blocks: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'RemoveTransitGatewayCidrBlocks' }})
    vpn_ecmp_support: Optional[shared.VpnEcmpSupportValueEnum] = field(default=None, metadata={'query_param': { 'field_name': 'VpnEcmpSupport' }})
    
class GetModifyTransitGatewayVersionEnum(str, Enum):
    TWO_THOUSAND_AND_SIXTEEN_11_15 = "2016-11-15"


@dataclass
class GetModifyTransitGatewayQueryParams:
    action: GetModifyTransitGatewayActionEnum = field(default=None, metadata={'query_param': { 'field_name': 'Action', 'style': 'form', 'explode': True }})
    description: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'Description', 'style': 'form', 'explode': True }})
    dry_run: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'DryRun', 'style': 'form', 'explode': True }})
    options: Optional[GetModifyTransitGatewayOptions] = field(default=None, metadata={'query_param': { 'field_name': 'Options', 'style': 'form', 'explode': True }})
    transit_gateway_id: str = field(default=None, metadata={'query_param': { 'field_name': 'TransitGatewayId', 'style': 'form', 'explode': True }})
    version: GetModifyTransitGatewayVersionEnum = field(default=None, metadata={'query_param': { 'field_name': 'Version', 'style': 'form', 'explode': True }})
    

@dataclass
class GetModifyTransitGatewayHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    

@dataclass
class GetModifyTransitGatewayRequest:
    query_params: GetModifyTransitGatewayQueryParams = field(default=None)
    headers: GetModifyTransitGatewayHeaders = field(default=None)
    

@dataclass
class GetModifyTransitGatewayResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
