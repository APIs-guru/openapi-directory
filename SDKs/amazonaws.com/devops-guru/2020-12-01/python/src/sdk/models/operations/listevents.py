from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class ListEventsQueryParams:
    max_results: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'MaxResults', 'style': 'form', 'explode': True }})
    next_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'NextToken', 'style': 'form', 'explode': True }})
    

@dataclass
class ListEventsHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    

@dataclass_json
@dataclass
class ListEventsRequestBodyFilters:
    data_source: Optional[shared.EventDataSourceEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DataSource' }})
    event_class: Optional[shared.EventClassEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EventClass' }})
    event_source: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EventSource' }})
    event_time_range: Optional[shared.EventTimeRange] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EventTimeRange' }})
    insight_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'InsightId' }})
    resource_collection: Optional[shared.ResourceCollection] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ResourceCollection' }})
    

@dataclass_json
@dataclass
class ListEventsRequestBody:
    filters: ListEventsRequestBodyFilters = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Filters' }})
    max_results: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MaxResults' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    

@dataclass
class ListEventsRequest:
    query_params: ListEventsQueryParams = field(default=None)
    headers: ListEventsHeaders = field(default=None)
    request: ListEventsRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class ListEventsResponse:
    access_denied_exception: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    internal_server_exception: Optional[Any] = field(default=None)
    list_events_response: Optional[shared.ListEventsResponse] = field(default=None)
    resource_not_found_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    throttling_exception: Optional[Any] = field(default=None)
    validation_exception: Optional[Any] = field(default=None)
    
