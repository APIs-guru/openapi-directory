from dataclasses import dataclass, field
from typing import Enum,Optional

class GetAssociateSubnetCidrBlockActionEnum(str, Enum):
    ASSOCIATE_SUBNET_CIDR_BLOCK = "AssociateSubnetCidrBlock"

class GetAssociateSubnetCidrBlockVersionEnum(str, Enum):
    TWO_THOUSAND_AND_SIXTEEN_11_15 = "2016-11-15"


@dataclass
class GetAssociateSubnetCidrBlockQueryParams:
    action: GetAssociateSubnetCidrBlockActionEnum = field(default=None, metadata={'query_param': { 'field_name': 'Action', 'style': 'form', 'explode': True }})
    ipv6_cidr_block: str = field(default=None, metadata={'query_param': { 'field_name': 'Ipv6CidrBlock', 'style': 'form', 'explode': True }})
    subnet_id: str = field(default=None, metadata={'query_param': { 'field_name': 'SubnetId', 'style': 'form', 'explode': True }})
    version: GetAssociateSubnetCidrBlockVersionEnum = field(default=None, metadata={'query_param': { 'field_name': 'Version', 'style': 'form', 'explode': True }})
    

@dataclass
class GetAssociateSubnetCidrBlockHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    

@dataclass
class GetAssociateSubnetCidrBlockRequest:
    query_params: GetAssociateSubnetCidrBlockQueryParams = field(default=None)
    headers: GetAssociateSubnetCidrBlockHeaders = field(default=None)
    

@dataclass
class GetAssociateSubnetCidrBlockResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
