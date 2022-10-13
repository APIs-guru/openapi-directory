from dataclasses import dataclass, field
from typing import Enum,Optional

class PostDescribeAutoScalingNotificationTypesActionEnum(str, Enum):
    DESCRIBE_AUTO_SCALING_NOTIFICATION_TYPES = "DescribeAutoScalingNotificationTypes"

class PostDescribeAutoScalingNotificationTypesVersionEnum(str, Enum):
    TWO_THOUSAND_AND_ELEVEN_01_01 = "2011-01-01"


@dataclass
class PostDescribeAutoScalingNotificationTypesQueryParams:
    action: PostDescribeAutoScalingNotificationTypesActionEnum = field(default=None, metadata={'query_param': { 'field_name': 'Action', 'style': 'form', 'explode': True }})
    version: PostDescribeAutoScalingNotificationTypesVersionEnum = field(default=None, metadata={'query_param': { 'field_name': 'Version', 'style': 'form', 'explode': True }})
    

@dataclass
class PostDescribeAutoScalingNotificationTypesHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    

@dataclass
class PostDescribeAutoScalingNotificationTypesRequest:
    query_params: PostDescribeAutoScalingNotificationTypesQueryParams = field(default=None)
    headers: PostDescribeAutoScalingNotificationTypesHeaders = field(default=None)
    

@dataclass
class PostDescribeAutoScalingNotificationTypesResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
