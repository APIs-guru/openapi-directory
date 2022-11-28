from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from sdk.models import shared

class ListViolationEventsBehaviorCriteriaTypeEnum(str, Enum):
    STATIC = "STATIC"
    STATISTICAL = "STATISTICAL"
    MACHINE_LEARNING = "MACHINE_LEARNING"


@dataclass
class ListViolationEventsQueryParams:
    end_time: datetime = field(metadata={'query_param': { 'field_name': 'endTime', 'style': 'form', 'explode': True }})
    start_time: datetime = field(metadata={'query_param': { 'field_name': 'startTime', 'style': 'form', 'explode': True }})
    behavior_criteria_type: Optional[ListViolationEventsBehaviorCriteriaTypeEnum] = field(default=None, metadata={'query_param': { 'field_name': 'behaviorCriteriaType', 'style': 'form', 'explode': True }})
    list_suppressed_alerts: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'listSuppressedAlerts', 'style': 'form', 'explode': True }})
    max_results: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'maxResults', 'style': 'form', 'explode': True }})
    next_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'nextToken', 'style': 'form', 'explode': True }})
    security_profile_name: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'securityProfileName', 'style': 'form', 'explode': True }})
    thing_name: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'thingName', 'style': 'form', 'explode': True }})
    

@dataclass
class ListViolationEventsHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class ListViolationEventsRequest:
    headers: ListViolationEventsHeaders = field()
    query_params: ListViolationEventsQueryParams = field()
    

@dataclass
class ListViolationEventsResponse:
    content_type: str = field()
    status_code: int = field()
    internal_failure_exception: Optional[Any] = field(default=None)
    invalid_request_exception: Optional[Any] = field(default=None)
    list_violation_events_response: Optional[shared.ListViolationEventsResponse] = field(default=None)
    throttling_exception: Optional[Any] = field(default=None)
    
