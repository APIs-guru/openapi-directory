from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from sdk.models import shared

class DescribeDeliveryChannelStatusXAmzTargetEnum(str, Enum):
    STARLING_DOVE_SERVICE_DESCRIBE_DELIVERY_CHANNEL_STATUS = "StarlingDoveService.DescribeDeliveryChannelStatus"


@dataclass
class DescribeDeliveryChannelStatusHeaders:
    x_amz_target: DescribeDeliveryChannelStatusXAmzTargetEnum = field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class DescribeDeliveryChannelStatusRequest:
    headers: DescribeDeliveryChannelStatusHeaders = field()
    request: shared.DescribeDeliveryChannelStatusRequest = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class DescribeDeliveryChannelStatusResponse:
    content_type: str = field()
    status_code: int = field()
    describe_delivery_channel_status_response: Optional[shared.DescribeDeliveryChannelStatusResponse] = field(default=None)
    no_such_delivery_channel_exception: Optional[Any] = field(default=None)
    
