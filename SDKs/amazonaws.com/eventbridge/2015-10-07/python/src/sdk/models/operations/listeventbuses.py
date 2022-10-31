from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional
from sdk.models import shared

class ListEventBusesXAmzTargetEnum(str, Enum):
    AWS_EVENTS_LIST_EVENT_BUSES = "AWSEvents.ListEventBuses"


@dataclass
class ListEventBusesHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    x_amz_target: ListEventBusesXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    

@dataclass
class ListEventBusesRequest:
    headers: ListEventBusesHeaders = field(default=None)
    request: shared.ListEventBusesRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class ListEventBusesResponse:
    content_type: str = field(default=None)
    internal_exception: Optional[Any] = field(default=None)
    list_event_buses_response: Optional[shared.ListEventBusesResponse] = field(default=None)
    status_code: int = field(default=None)
    
