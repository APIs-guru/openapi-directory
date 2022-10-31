from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared

class StartDeliveryStreamEncryptionXAmzTargetEnum(str, Enum):
    FIREHOSE_20150804_START_DELIVERY_STREAM_ENCRYPTION = "Firehose_20150804.StartDeliveryStreamEncryption"


@dataclass
class StartDeliveryStreamEncryptionHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    x_amz_target: StartDeliveryStreamEncryptionXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    

@dataclass
class StartDeliveryStreamEncryptionRequest:
    headers: StartDeliveryStreamEncryptionHeaders = field(default=None)
    request: shared.StartDeliveryStreamEncryptionInput = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class StartDeliveryStreamEncryptionResponse:
    content_type: str = field(default=None)
    invalid_argument_exception: Optional[Any] = field(default=None)
    invalid_kms_resource_exception: Optional[Any] = field(default=None)
    limit_exceeded_exception: Optional[Any] = field(default=None)
    resource_in_use_exception: Optional[Any] = field(default=None)
    resource_not_found_exception: Optional[Any] = field(default=None)
    start_delivery_stream_encryption_output: Optional[dict[str, Any]] = field(default=None)
    status_code: int = field(default=None)
    
