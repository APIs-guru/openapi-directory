from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared

class PutPartnerEventsXAmzTargetEnum(str, Enum):
    AWS_EVENTS_PUT_PARTNER_EVENTS = "AWSEvents.PutPartnerEvents"


@dataclass
class PutPartnerEventsHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    x_amz_target: PutPartnerEventsXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target' }})
    

@dataclass
class PutPartnerEventsRequest:
    headers: PutPartnerEventsHeaders = field(default=None)
    request: shared.PutPartnerEventsRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PutPartnerEventsResponse:
    content_type: str = field(default=None)
    internal_exception: Optional[Any] = field(default=None)
    operation_disabled_exception: Optional[Any] = field(default=None)
    put_partner_events_response: Optional[shared.PutPartnerEventsResponse] = field(default=None)
    status_code: int = field(default=None)
    
