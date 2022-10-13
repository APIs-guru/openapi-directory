from dataclasses import dataclass, field
from typing import Enum,List,Optional

class GetDisassociateTransitGatewayMulticastDomainActionEnum(str, Enum):
    DISASSOCIATE_TRANSIT_GATEWAY_MULTICAST_DOMAIN = "DisassociateTransitGatewayMulticastDomain"

class GetDisassociateTransitGatewayMulticastDomainVersionEnum(str, Enum):
    TWO_THOUSAND_AND_SIXTEEN_11_15 = "2016-11-15"


@dataclass
class GetDisassociateTransitGatewayMulticastDomainQueryParams:
    action: GetDisassociateTransitGatewayMulticastDomainActionEnum = field(default=None, metadata={'query_param': { 'field_name': 'Action', 'style': 'form', 'explode': True }})
    dry_run: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'DryRun', 'style': 'form', 'explode': True }})
    subnet_ids: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'SubnetIds', 'style': 'form', 'explode': True }})
    transit_gateway_attachment_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'TransitGatewayAttachmentId', 'style': 'form', 'explode': True }})
    transit_gateway_multicast_domain_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'TransitGatewayMulticastDomainId', 'style': 'form', 'explode': True }})
    version: GetDisassociateTransitGatewayMulticastDomainVersionEnum = field(default=None, metadata={'query_param': { 'field_name': 'Version', 'style': 'form', 'explode': True }})
    

@dataclass
class GetDisassociateTransitGatewayMulticastDomainHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    

@dataclass
class GetDisassociateTransitGatewayMulticastDomainRequest:
    query_params: GetDisassociateTransitGatewayMulticastDomainQueryParams = field(default=None)
    headers: GetDisassociateTransitGatewayMulticastDomainHeaders = field(default=None)
    

@dataclass
class GetDisassociateTransitGatewayMulticastDomainResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
