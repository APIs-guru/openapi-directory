from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared

class CreatePartnerEventSourceXAmzTargetEnum(str, Enum):
    AWS_EVENTS_CREATE_PARTNER_EVENT_SOURCE = "AWSEvents.CreatePartnerEventSource"


@dataclass
class CreatePartnerEventSourceHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    x_amz_target: CreatePartnerEventSourceXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreatePartnerEventSourceRequest:
    headers: CreatePartnerEventSourceHeaders = field(default=None)
    request: shared.CreatePartnerEventSourceRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreatePartnerEventSourceResponse:
    concurrent_modification_exception: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    create_partner_event_source_response: Optional[shared.CreatePartnerEventSourceResponse] = field(default=None)
    internal_exception: Optional[Any] = field(default=None)
    limit_exceeded_exception: Optional[Any] = field(default=None)
    operation_disabled_exception: Optional[Any] = field(default=None)
    resource_already_exists_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
