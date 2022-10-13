from dataclasses import dataclass, field
from typing import Enum,List,Optional

class GetAttachLoadBalancerToSubnetsActionEnum(str, Enum):
    ATTACH_LOAD_BALANCER_TO_SUBNETS = "AttachLoadBalancerToSubnets"

class GetAttachLoadBalancerToSubnetsVersionEnum(str, Enum):
    TWO_THOUSAND_AND_TWELVE_06_01 = "2012-06-01"


@dataclass
class GetAttachLoadBalancerToSubnetsQueryParams:
    action: GetAttachLoadBalancerToSubnetsActionEnum = field(default=None, metadata={'query_param': { 'field_name': 'Action', 'style': 'form', 'explode': True }})
    load_balancer_name: str = field(default=None, metadata={'query_param': { 'field_name': 'LoadBalancerName', 'style': 'form', 'explode': True }})
    subnets: List[str] = field(default=None, metadata={'query_param': { 'field_name': 'Subnets', 'style': 'form', 'explode': True }})
    version: GetAttachLoadBalancerToSubnetsVersionEnum = field(default=None, metadata={'query_param': { 'field_name': 'Version', 'style': 'form', 'explode': True }})
    

@dataclass
class GetAttachLoadBalancerToSubnetsHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    

@dataclass
class GetAttachLoadBalancerToSubnetsRequest:
    query_params: GetAttachLoadBalancerToSubnetsQueryParams = field(default=None)
    headers: GetAttachLoadBalancerToSubnetsHeaders = field(default=None)
    

@dataclass
class GetAttachLoadBalancerToSubnetsResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
