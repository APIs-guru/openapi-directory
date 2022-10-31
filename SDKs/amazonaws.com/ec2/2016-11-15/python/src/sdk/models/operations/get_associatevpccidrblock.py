from dataclasses import dataclass, field
from typing import Enum,Optional

class GetAssociateVpcCidrBlockActionEnum(str, Enum):
    ASSOCIATE_VPC_CIDR_BLOCK = "AssociateVpcCidrBlock"

class GetAssociateVpcCidrBlockVersionEnum(str, Enum):
    TWO_THOUSAND_AND_SIXTEEN_11_15 = "2016-11-15"


@dataclass
class GetAssociateVpcCidrBlockQueryParams:
    action: GetAssociateVpcCidrBlockActionEnum = field(default=None, metadata={'query_param': { 'field_name': 'Action', 'style': 'form', 'explode': True }})
    amazon_provided_ipv6_cidr_block: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'AmazonProvidedIpv6CidrBlock', 'style': 'form', 'explode': True }})
    cidr_block: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'CidrBlock', 'style': 'form', 'explode': True }})
    ipv6_cidr_block: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'Ipv6CidrBlock', 'style': 'form', 'explode': True }})
    ipv6_cidr_block_network_border_group: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'Ipv6CidrBlockNetworkBorderGroup', 'style': 'form', 'explode': True }})
    ipv6_pool: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'Ipv6Pool', 'style': 'form', 'explode': True }})
    version: GetAssociateVpcCidrBlockVersionEnum = field(default=None, metadata={'query_param': { 'field_name': 'Version', 'style': 'form', 'explode': True }})
    vpc_id: str = field(default=None, metadata={'query_param': { 'field_name': 'VpcId', 'style': 'form', 'explode': True }})
    

@dataclass
class GetAssociateVpcCidrBlockHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetAssociateVpcCidrBlockRequest:
    query_params: GetAssociateVpcCidrBlockQueryParams = field(default=None)
    headers: GetAssociateVpcCidrBlockHeaders = field(default=None)
    

@dataclass
class GetAssociateVpcCidrBlockResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
