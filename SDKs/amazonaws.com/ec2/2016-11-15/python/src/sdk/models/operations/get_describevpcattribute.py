from dataclasses import dataclass, field
from typing import Enum,Optional

class GetDescribeVpcAttributeActionEnum(str, Enum):
    DESCRIBE_VPC_ATTRIBUTE = "DescribeVpcAttribute"

class GetDescribeVpcAttributeAttributeEnum(str, Enum):
    ENABLE_DNS_SUPPORT = "enableDnsSupport"
    ENABLE_DNS_HOSTNAMES = "enableDnsHostnames"

class GetDescribeVpcAttributeVersionEnum(str, Enum):
    TWO_THOUSAND_AND_SIXTEEN_11_15 = "2016-11-15"


@dataclass
class GetDescribeVpcAttributeQueryParams:
    action: GetDescribeVpcAttributeActionEnum = field(default=None, metadata={'query_param': { 'field_name': 'Action', 'style': 'form', 'explode': True }})
    attribute: GetDescribeVpcAttributeAttributeEnum = field(default=None, metadata={'query_param': { 'field_name': 'Attribute', 'style': 'form', 'explode': True }})
    dry_run: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'DryRun', 'style': 'form', 'explode': True }})
    version: GetDescribeVpcAttributeVersionEnum = field(default=None, metadata={'query_param': { 'field_name': 'Version', 'style': 'form', 'explode': True }})
    vpc_id: str = field(default=None, metadata={'query_param': { 'field_name': 'VpcId', 'style': 'form', 'explode': True }})
    

@dataclass
class GetDescribeVpcAttributeHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetDescribeVpcAttributeRequest:
    query_params: GetDescribeVpcAttributeQueryParams = field(default=None)
    headers: GetDescribeVpcAttributeHeaders = field(default=None)
    

@dataclass
class GetDescribeVpcAttributeResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
