from dataclasses import dataclass, field
from typing import Enum,Optional

class PostStartVpcEndpointServicePrivateDNSVerificationActionEnum(str, Enum):
    START_VPC_ENDPOINT_SERVICE_PRIVATE_DNS_VERIFICATION = "StartVpcEndpointServicePrivateDnsVerification"

class PostStartVpcEndpointServicePrivateDNSVerificationVersionEnum(str, Enum):
    TWO_THOUSAND_AND_SIXTEEN_11_15 = "2016-11-15"


@dataclass
class PostStartVpcEndpointServicePrivateDNSVerificationQueryParams:
    action: PostStartVpcEndpointServicePrivateDNSVerificationActionEnum = field(default=None, metadata={'query_param': { 'field_name': 'Action', 'style': 'form', 'explode': True }})
    version: PostStartVpcEndpointServicePrivateDNSVerificationVersionEnum = field(default=None, metadata={'query_param': { 'field_name': 'Version', 'style': 'form', 'explode': True }})
    

@dataclass
class PostStartVpcEndpointServicePrivateDNSVerificationHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    

@dataclass
class PostStartVpcEndpointServicePrivateDNSVerificationRequest:
    query_params: PostStartVpcEndpointServicePrivateDNSVerificationQueryParams = field(default=None)
    headers: PostStartVpcEndpointServicePrivateDNSVerificationHeaders = field(default=None)
    request: Optional[bytes] = field(default=None, metadata={'request': { 'media_type': 'text/xml' }})
    

@dataclass
class PostStartVpcEndpointServicePrivateDNSVerificationResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
