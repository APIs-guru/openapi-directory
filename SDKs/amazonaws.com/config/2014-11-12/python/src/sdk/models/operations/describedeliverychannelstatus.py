from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared

class DescribeDeliveryChannelStatusXAmzTargetEnum(str, Enum):
    STARLING_DOVE_SERVICE_DESCRIBE_DELIVERY_CHANNEL_STATUS = "StarlingDoveService.DescribeDeliveryChannelStatus"


@dataclass
class DescribeDeliveryChannelStatusHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    x_amz_target: DescribeDeliveryChannelStatusXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target' }})
    

@dataclass
class DescribeDeliveryChannelStatusRequest:
    headers: DescribeDeliveryChannelStatusHeaders = field(default=None)
    request: shared.DescribeDeliveryChannelStatusRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class DescribeDeliveryChannelStatusResponse:
    content_type: str = field(default=None)
    describe_delivery_channel_status_response: Optional[shared.DescribeDeliveryChannelStatusResponse] = field(default=None)
    no_such_delivery_channel_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
