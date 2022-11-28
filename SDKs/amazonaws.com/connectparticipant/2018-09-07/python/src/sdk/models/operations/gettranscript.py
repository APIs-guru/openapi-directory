from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class GetTranscriptQueryParams:
    max_results: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'MaxResults', 'style': 'form', 'explode': True }})
    next_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'NextToken', 'style': 'form', 'explode': True }})
    

@dataclass
class GetTranscriptHeaders:
    x_amz_bearer: str = field(metadata={'header': { 'field_name': 'X-Amz-Bearer', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
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
    r"""GetTranscriptRequestBodyStartPosition
    A filtering option for where to start. For example, if you sent 100 messages, start with message 50. 
    """
    
    absolute_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AbsoluteTime') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Id') }})
    most_recent: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MostRecent') }})
    

@dataclass_json
@dataclass
class GetTranscriptRequestBody:
    contact_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ContactId') }})
    max_results: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MaxResults') }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    scan_direction: Optional[GetTranscriptRequestBodyScanDirectionEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ScanDirection') }})
    sort_order: Optional[GetTranscriptRequestBodySortOrderEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SortOrder') }})
    start_position: Optional[GetTranscriptRequestBodyStartPosition] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StartPosition') }})
    

@dataclass
class GetTranscriptRequest:
    headers: GetTranscriptHeaders = field()
    query_params: GetTranscriptQueryParams = field()
    request: GetTranscriptRequestBody = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class GetTranscriptResponse:
    content_type: str = field()
    status_code: int = field()
    access_denied_exception: Optional[Any] = field(default=None)
    get_transcript_response: Optional[shared.GetTranscriptResponse] = field(default=None)
    internal_server_exception: Optional[Any] = field(default=None)
    throttling_exception: Optional[Any] = field(default=None)
    validation_exception: Optional[Any] = field(default=None)
    
