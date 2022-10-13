from dataclasses import dataclass, field
from typing import Enum,Optional

class GetDescribeIdentityIDFormatActionEnum(str, Enum):
    DESCRIBE_IDENTITY_ID_FORMAT = "DescribeIdentityIdFormat"

class GetDescribeIdentityIDFormatVersionEnum(str, Enum):
    TWO_THOUSAND_AND_SIXTEEN_11_15 = "2016-11-15"


@dataclass
class GetDescribeIdentityIDFormatQueryParams:
    action: GetDescribeIdentityIDFormatActionEnum = field(default=None, metadata={'query_param': { 'field_name': 'Action', 'style': 'form', 'explode': True }})
    principal_arn: str = field(default=None, metadata={'query_param': { 'field_name': 'PrincipalArn', 'style': 'form', 'explode': True }})
    resource: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'Resource', 'style': 'form', 'explode': True }})
    version: GetDescribeIdentityIDFormatVersionEnum = field(default=None, metadata={'query_param': { 'field_name': 'Version', 'style': 'form', 'explode': True }})
    

@dataclass
class GetDescribeIdentityIDFormatHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    

@dataclass
class GetDescribeIdentityIDFormatRequest:
    query_params: GetDescribeIdentityIDFormatQueryParams = field(default=None)
    headers: GetDescribeIdentityIDFormatHeaders = field(default=None)
    

@dataclass
class GetDescribeIdentityIDFormatResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
