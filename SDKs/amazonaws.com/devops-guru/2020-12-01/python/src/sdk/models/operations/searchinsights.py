from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Enum,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class SearchInsightsQueryParams:
    max_results: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'MaxResults', 'style': 'form', 'explode': True }})
    next_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'NextToken', 'style': 'form', 'explode': True }})
    

@dataclass
class SearchInsightsHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class SearchInsightsRequestBodyFilters:
    resource_collection: Optional[shared.ResourceCollection] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ResourceCollection' }})
    service_collection: Optional[shared.ServiceCollection] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ServiceCollection' }})
    severities: Optional[List[shared.InsightSeverityEnum]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Severities' }})
    statuses: Optional[List[shared.InsightStatusEnum]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Statuses' }})
    

@dataclass_json
@dataclass
class SearchInsightsRequestBodyStartTimeRange:
    from_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FromTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    to_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ToTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
class SearchInsightsRequestBodyTypeEnum(str, Enum):
    REACTIVE = "REACTIVE"
    PROACTIVE = "PROACTIVE"


@dataclass_json
@dataclass
class SearchInsightsRequestBody:
    filters: Optional[SearchInsightsRequestBodyFilters] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Filters' }})
    max_results: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MaxResults' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    start_time_range: SearchInsightsRequestBodyStartTimeRange = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StartTimeRange' }})
    type: SearchInsightsRequestBodyTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Type' }})
    

@dataclass
class SearchInsightsRequest:
    query_params: SearchInsightsQueryParams = field(default=None)
    headers: SearchInsightsHeaders = field(default=None)
    request: SearchInsightsRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class SearchInsightsResponse:
    access_denied_exception: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    internal_server_exception: Optional[Any] = field(default=None)
    search_insights_response: Optional[shared.SearchInsightsResponse] = field(default=None)
    status_code: int = field(default=None)
    throttling_exception: Optional[Any] = field(default=None)
    validation_exception: Optional[Any] = field(default=None)
    
