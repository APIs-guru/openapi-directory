from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass
class CancelJobExecutionPathParams:
    job_id: str = field(metadata={'path_param': { 'field_name': 'jobId', 'style': 'simple', 'explode': False }})
    thing_name: str = field(metadata={'path_param': { 'field_name': 'thingName', 'style': 'simple', 'explode': False }})
    

@dataclass
class CancelJobExecutionQueryParams:
    force: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'force', 'style': 'form', 'explode': True }})
    

@dataclass
class CancelJobExecutionHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class CancelJobExecutionRequestBody:
    expected_version: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('expectedVersion') }})
    status_details: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('statusDetails') }})
    

@dataclass
class CancelJobExecutionRequest:
    headers: CancelJobExecutionHeaders = field()
    path_params: CancelJobExecutionPathParams = field()
    query_params: CancelJobExecutionQueryParams = field()
    request: CancelJobExecutionRequestBody = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CancelJobExecutionResponse:
    content_type: str = field()
    status_code: int = field()
    invalid_request_exception: Optional[Any] = field(default=None)
    invalid_state_transition_exception: Optional[Any] = field(default=None)
    resource_not_found_exception: Optional[Any] = field(default=None)
    service_unavailable_exception: Optional[Any] = field(default=None)
    throttling_exception: Optional[Any] = field(default=None)
    version_conflict_exception: Optional[Any] = field(default=None)
    
