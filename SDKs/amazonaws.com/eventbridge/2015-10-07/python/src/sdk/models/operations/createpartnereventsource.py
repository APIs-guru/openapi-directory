from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from sdk.models import shared

class CreatePartnerEventSourceXAmzTargetEnum(str, Enum):
    AWS_EVENTS_CREATE_PARTNER_EVENT_SOURCE = "AWSEvents.CreatePartnerEventSource"


@dataclass
class CreatePartnerEventSourceHeaders:
    x_amz_target: CreatePartnerEventSourceXAmzTargetEnum = field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreatePartnerEventSourceRequest:
    headers: CreatePartnerEventSourceHeaders = field()
    request: shared.CreatePartnerEventSourceRequest = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreatePartnerEventSourceResponse:
    content_type: str = field()
    status_code: int = field()
    concurrent_modification_exception: Optional[Any] = field(default=None)
    create_partner_event_source_response: Optional[shared.CreatePartnerEventSourceResponse] = field(default=None)
    internal_exception: Optional[Any] = field(default=None)
    limit_exceeded_exception: Optional[Any] = field(default=None)
    operation_disabled_exception: Optional[Any] = field(default=None)
    resource_already_exists_exception: Optional[Any] = field(default=None)
    
