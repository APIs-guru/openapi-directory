from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared

class PutDeliveryChannelXAmzTargetEnum(str, Enum):
    STARLING_DOVE_SERVICE_PUT_DELIVERY_CHANNEL = "StarlingDoveService.PutDeliveryChannel"


@dataclass
class PutDeliveryChannelHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    x_amz_target: PutDeliveryChannelXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    

@dataclass
class PutDeliveryChannelRequest:
    headers: PutDeliveryChannelHeaders = field(default=None)
    request: shared.PutDeliveryChannelRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PutDeliveryChannelResponse:
    content_type: str = field(default=None)
    insufficient_delivery_policy_exception: Optional[Any] = field(default=None)
    invalid_delivery_channel_name_exception: Optional[Any] = field(default=None)
    invalid_s3_key_prefix_exception: Optional[Any] = field(default=None)
    invalid_s3_kms_key_arn_exception: Optional[Any] = field(default=None)
    invalid_sns_topic_arn_exception: Optional[Any] = field(default=None)
    max_number_of_delivery_channels_exceeded_exception: Optional[Any] = field(default=None)
    no_available_configuration_recorder_exception: Optional[Any] = field(default=None)
    no_such_bucket_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
