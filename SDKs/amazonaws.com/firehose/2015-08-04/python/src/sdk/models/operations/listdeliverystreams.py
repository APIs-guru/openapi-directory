from dataclasses import dataclass, field
from typing import Enum,List,Optional
from sdk.models import shared

class ListDeliveryStreamsXAmzTargetEnum(str, Enum):
    FIREHOSE_20150804_LIST_DELIVERY_STREAMS = "Firehose_20150804.ListDeliveryStreams"


@dataclass
class ListDeliveryStreamsHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    x_amz_target: ListDeliveryStreamsXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target' }})
    

@dataclass
class ListDeliveryStreamsRequest:
    headers: ListDeliveryStreamsHeaders = field(default=None)
    request: shared.ListDeliveryStreamsInput = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class ListDeliveryStreamsResponse:
    content_type: str = field(default=None)
    list_delivery_streams_output: Optional[shared.ListDeliveryStreamsOutput] = field(default=None)
    status_code: int = field(default=None)
    
