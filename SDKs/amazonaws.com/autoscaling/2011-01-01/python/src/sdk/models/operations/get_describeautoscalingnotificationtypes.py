from dataclasses import dataclass, field
from typing import Enum,Optional

class GetDescribeAutoScalingNotificationTypesActionEnum(str, Enum):
    DESCRIBE_AUTO_SCALING_NOTIFICATION_TYPES = "DescribeAutoScalingNotificationTypes"

class GetDescribeAutoScalingNotificationTypesVersionEnum(str, Enum):
    TWO_THOUSAND_AND_ELEVEN_01_01 = "2011-01-01"


@dataclass
class GetDescribeAutoScalingNotificationTypesQueryParams:
    action: GetDescribeAutoScalingNotificationTypesActionEnum = field(default=None, metadata={'query_param': { 'field_name': 'Action', 'style': 'form', 'explode': True }})
    version: GetDescribeAutoScalingNotificationTypesVersionEnum = field(default=None, metadata={'query_param': { 'field_name': 'Version', 'style': 'form', 'explode': True }})
    

@dataclass
class GetDescribeAutoScalingNotificationTypesHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    

@dataclass
class GetDescribeAutoScalingNotificationTypesRequest:
    query_params: GetDescribeAutoScalingNotificationTypesQueryParams = field(default=None)
    headers: GetDescribeAutoScalingNotificationTypesHeaders = field(default=None)
    

@dataclass
class GetDescribeAutoScalingNotificationTypesResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
