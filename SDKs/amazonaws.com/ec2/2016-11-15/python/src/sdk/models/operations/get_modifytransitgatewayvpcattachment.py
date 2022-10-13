from dataclasses import dataclass, field
from typing import Enum,List,Optional
from sdk.models import shared

class GetModifyTransitGatewayVpcAttachmentActionEnum(str, Enum):
    MODIFY_TRANSIT_GATEWAY_VPC_ATTACHMENT = "ModifyTransitGatewayVpcAttachment"


@dataclass
class GetModifyTransitGatewayVpcAttachmentOptions:
    appliance_mode_support: Optional[shared.ApplianceModeSupportValueEnum] = field(default=None, metadata={'query_param': { 'field_name': 'ApplianceModeSupport' }})
    dns_support: Optional[shared.DNSSupportValueEnum] = field(default=None, metadata={'query_param': { 'field_name': 'DnsSupport' }})
    ipv6_support: Optional[shared.Ipv6SupportValueEnum] = field(default=None, metadata={'query_param': { 'field_name': 'Ipv6Support' }})
    
class GetModifyTransitGatewayVpcAttachmentVersionEnum(str, Enum):
    TWO_THOUSAND_AND_SIXTEEN_11_15 = "2016-11-15"


@dataclass
class GetModifyTransitGatewayVpcAttachmentQueryParams:
    action: GetModifyTransitGatewayVpcAttachmentActionEnum = field(default=None, metadata={'query_param': { 'field_name': 'Action', 'style': 'form', 'explode': True }})
    add_subnet_ids: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'AddSubnetIds', 'style': 'form', 'explode': True }})
    dry_run: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'DryRun', 'style': 'form', 'explode': True }})
    options: Optional[GetModifyTransitGatewayVpcAttachmentOptions] = field(default=None, metadata={'query_param': { 'field_name': 'Options', 'style': 'form', 'explode': True }})
    remove_subnet_ids: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'RemoveSubnetIds', 'style': 'form', 'explode': True }})
    transit_gateway_attachment_id: str = field(default=None, metadata={'query_param': { 'field_name': 'TransitGatewayAttachmentId', 'style': 'form', 'explode': True }})
    version: GetModifyTransitGatewayVpcAttachmentVersionEnum = field(default=None, metadata={'query_param': { 'field_name': 'Version', 'style': 'form', 'explode': True }})
    

@dataclass
class GetModifyTransitGatewayVpcAttachmentHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    

@dataclass
class GetModifyTransitGatewayVpcAttachmentRequest:
    query_params: GetModifyTransitGatewayVpcAttachmentQueryParams = field(default=None)
    headers: GetModifyTransitGatewayVpcAttachmentHeaders = field(default=None)
    

@dataclass
class GetModifyTransitGatewayVpcAttachmentResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
