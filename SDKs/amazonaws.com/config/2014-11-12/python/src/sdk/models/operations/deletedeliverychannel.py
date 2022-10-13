from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared

class DeleteDeliveryChannelXAmzTargetEnum(str, Enum):
    STARLING_DOVE_SERVICE_DELETE_DELIVERY_CHANNEL = "StarlingDoveService.DeleteDeliveryChannel"


@dataclass
class DeleteDeliveryChannelHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    x_amz_target: DeleteDeliveryChannelXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target' }})
    

@dataclass
class DeleteDeliveryChannelRequest:
    headers: DeleteDeliveryChannelHeaders = field(default=None)
    request: shared.DeleteDeliveryChannelRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class DeleteDeliveryChannelResponse:
    content_type: str = field(default=None)
    last_delivery_channel_delete_failed_exception: Optional[Any] = field(default=None)
    no_such_delivery_channel_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
