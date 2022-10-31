from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class GetTranscriptQueryParams:
    max_results: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'MaxResults', 'style': 'form', 'explode': True }})
    next_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'NextToken', 'style': 'form', 'explode': True }})
    

@dataclass
class GetTranscriptHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_bearer: str = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Bearer', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    
class GetTranscriptRequestBodyScanDirectionEnum(str, Enum):
    FORWARD = "FORWARD"
    BACKWARD = "BACKWARD"

class GetTranscriptRequestBodySortOrderEnum(str, Enum):
    DESCENDING = "DESCENDING"
    ASCENDING = "ASCENDING"


@dataclass_json
@dataclass
class GetTranscriptRequestBodyStartPosition:
    absolute_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AbsoluteTime' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Id' }})
    most_recent: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MostRecent' }})
    

@dataclass_json
@dataclass
class GetTranscriptRequestBody:
    contact_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ContactId' }})
    max_results: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MaxResults' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    scan_direction: Optional[GetTranscriptRequestBodyScanDirectionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ScanDirection' }})
    sort_order: Optional[GetTranscriptRequestBodySortOrderEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SortOrder' }})
    start_position: Optional[GetTranscriptRequestBodyStartPosition] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StartPosition' }})
    

@dataclass
class GetTranscriptRequest:
    query_params: GetTranscriptQueryParams = field(default=None)
    headers: GetTranscriptHeaders = field(default=None)
    request: GetTranscriptRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class GetTranscriptResponse:
    access_denied_exception: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    get_transcript_response: Optional[shared.GetTranscriptResponse] = field(default=None)
    internal_server_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    throttling_exception: Optional[Any] = field(default=None)
    validation_exception: Optional[Any] = field(default=None)
    
