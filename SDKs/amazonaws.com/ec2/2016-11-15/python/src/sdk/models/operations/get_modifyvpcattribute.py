from dataclasses import dataclass, field
from typing import Enum,Optional

class GetModifyVpcAttributeActionEnum(str, Enum):
    MODIFY_VPC_ATTRIBUTE = "ModifyVpcAttribute"


@dataclass
class GetModifyVpcAttributeEnableDNSHostnames:
    value: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'Value' }})
    

@dataclass
class GetModifyVpcAttributeEnableDNSSupport:
    value: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'Value' }})
    
class GetModifyVpcAttributeVersionEnum(str, Enum):
    TWO_THOUSAND_AND_SIXTEEN_11_15 = "2016-11-15"


@dataclass
class GetModifyVpcAttributeQueryParams:
    action: GetModifyVpcAttributeActionEnum = field(default=None, metadata={'query_param': { 'field_name': 'Action', 'style': 'form', 'explode': True }})
    enable_dns_hostnames: Optional[GetModifyVpcAttributeEnableDNSHostnames] = field(default=None, metadata={'query_param': { 'field_name': 'EnableDnsHostnames', 'style': 'form', 'explode': True }})
    enable_dns_support: Optional[GetModifyVpcAttributeEnableDNSSupport] = field(default=None, metadata={'query_param': { 'field_name': 'EnableDnsSupport', 'style': 'form', 'explode': True }})
    version: GetModifyVpcAttributeVersionEnum = field(default=None, metadata={'query_param': { 'field_name': 'Version', 'style': 'form', 'explode': True }})
    vpc_id: str = field(default=None, metadata={'query_param': { 'field_name': 'VpcId', 'style': 'form', 'explode': True }})
    

@dataclass
class GetModifyVpcAttributeHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    

@dataclass
class GetModifyVpcAttributeRequest:
    query_params: GetModifyVpcAttributeQueryParams = field(default=None)
    headers: GetModifyVpcAttributeHeaders = field(default=None)
    

@dataclass
class GetModifyVpcAttributeResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
