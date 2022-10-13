from dataclasses import dataclass, field
from typing import Enum,Optional

class GetDescribeTargetGroupAttributesActionEnum(str, Enum):
    DESCRIBE_TARGET_GROUP_ATTRIBUTES = "DescribeTargetGroupAttributes"

class GetDescribeTargetGroupAttributesVersionEnum(str, Enum):
    TWO_THOUSAND_AND_FIFTEEN_12_01 = "2015-12-01"


@dataclass
class GetDescribeTargetGroupAttributesQueryParams:
    action: GetDescribeTargetGroupAttributesActionEnum = field(default=None, metadata={'query_param': { 'field_name': 'Action', 'style': 'form', 'explode': True }})
    target_group_arn: str = field(default=None, metadata={'query_param': { 'field_name': 'TargetGroupArn', 'style': 'form', 'explode': True }})
    version: GetDescribeTargetGroupAttributesVersionEnum = field(default=None, metadata={'query_param': { 'field_name': 'Version', 'style': 'form', 'explode': True }})
    

@dataclass
class GetDescribeTargetGroupAttributesHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    

@dataclass
class GetDescribeTargetGroupAttributesRequest:
    query_params: GetDescribeTargetGroupAttributesQueryParams = field(default=None)
    headers: GetDescribeTargetGroupAttributesHeaders = field(default=None)
    

@dataclass
class GetDescribeTargetGroupAttributesResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
