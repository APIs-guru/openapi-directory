from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from sdk.models import shared

class GetModifyTransitGatewayVpcAttachmentActionEnum(str, Enum):
    MODIFY_TRANSIT_GATEWAY_VPC_ATTACHMENT = "ModifyTransitGatewayVpcAttachment"


@dataclass
class GetModifyTransitGatewayVpcAttachmentOptions:
    r"""GetModifyTransitGatewayVpcAttachmentOptions
    Describes the options for a VPC attachment.
    """
    
    appliance_mode_support: Optional[shared.ApplianceModeSupportValueEnum] = field(default=None, metadata={'query_param': { 'field_name': 'ApplianceModeSupport' }})
    dns_support: Optional[shared.DNSSupportValueEnum] = field(default=None, metadata={'query_param': { 'field_name': 'DnsSupport' }})
    ipv6_support: Optional[shared.Ipv6SupportValueEnum] = field(default=None, metadata={'query_param': { 'field_name': 'Ipv6Support' }})
    
class GetModifyTransitGatewayVpcAttachmentVersionEnum(str, Enum):
    TWO_THOUSAND_AND_SIXTEEN_11_15 = "2016-11-15"


@dataclass
class GetModifyTransitGatewayVpcAttachmentQueryParams:
    action: GetModifyTransitGatewayVpcAttachmentActionEnum = field(metadata={'query_param': { 'field_name': 'Action', 'style': 'form', 'explode': True }})
    transit_gateway_attachment_id: str = field(metadata={'query_param': { 'field_name': 'TransitGatewayAttachmentId', 'style': 'form', 'explode': True }})
    version: GetModifyTransitGatewayVpcAttachmentVersionEnum = field(metadata={'query_param': { 'field_name': 'Version', 'style': 'form', 'explode': True }})
    add_subnet_ids: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'AddSubnetIds', 'style': 'form', 'explode': True }})
    dry_run: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'DryRun', 'style': 'form', 'explode': True }})
    options: Optional[GetModifyTransitGatewayVpcAttachmentOptions] = field(default=None, metadata={'query_param': { 'field_name': 'Options', 'style': 'form', 'explode': True }})
    remove_subnet_ids: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'RemoveSubnetIds', 'style': 'form', 'explode': True }})
    

@dataclass
class GetModifyTransitGatewayVpcAttachmentHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetModifyTransitGatewayVpcAttachmentRequest:
    headers: GetModifyTransitGatewayVpcAttachmentHeaders = field()
    query_params: GetModifyTransitGatewayVpcAttachmentQueryParams = field()
    

@dataclass
class GetModifyTransitGatewayVpcAttachmentResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
