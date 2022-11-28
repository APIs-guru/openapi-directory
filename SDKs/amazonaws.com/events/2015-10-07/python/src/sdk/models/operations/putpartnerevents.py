from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from sdk.models import shared

class PutPartnerEventsXAmzTargetEnum(str, Enum):
    AWS_EVENTS_PUT_PARTNER_EVENTS = "AWSEvents.PutPartnerEvents"


@dataclass
class PutPartnerEventsHeaders:
    x_amz_target: PutPartnerEventsXAmzTargetEnum = field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class PutPartnerEventsRequest:
    headers: PutPartnerEventsHeaders = field()
    request: shared.PutPartnerEventsRequest = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PutPartnerEventsResponse:
    content_type: str = field()
    status_code: int = field()
    internal_exception: Optional[Any] = field(default=None)
    operation_disabled_exception: Optional[Any] = field(default=None)
    put_partner_events_response: Optional[shared.PutPartnerEventsResponse] = field(default=None)
    
