from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared

class CreateDeliveryStreamXAmzTargetEnum(str, Enum):
    FIREHOSE_20150804_CREATE_DELIVERY_STREAM = "Firehose_20150804.CreateDeliveryStream"


@dataclass
class CreateDeliveryStreamHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    x_amz_target: CreateDeliveryStreamXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target' }})
    

@dataclass
class CreateDeliveryStreamRequest:
    headers: CreateDeliveryStreamHeaders = field(default=None)
    request: shared.CreateDeliveryStreamInput = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateDeliveryStreamResponse:
    content_type: str = field(default=None)
    create_delivery_stream_output: Optional[shared.CreateDeliveryStreamOutput] = field(default=None)
    invalid_argument_exception: Optional[Any] = field(default=None)
    invalid_kms_resource_exception: Optional[Any] = field(default=None)
    limit_exceeded_exception: Optional[Any] = field(default=None)
    resource_in_use_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
