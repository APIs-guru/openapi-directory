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
class UpdateJobExecutionPathParams:
    job_id: str = field(metadata={'path_param': { 'field_name': 'jobId', 'style': 'simple', 'explode': False }})
    thing_name: str = field(metadata={'path_param': { 'field_name': 'thingName', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateJobExecutionHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    
class UpdateJobExecutionRequestBodyStatusEnum(str, Enum):
    QUEUED = "QUEUED"
    IN_PROGRESS = "IN_PROGRESS"
    SUCCEEDED = "SUCCEEDED"
    FAILED = "FAILED"
    TIMED_OUT = "TIMED_OUT"
    REJECTED = "REJECTED"
    REMOVED = "REMOVED"
    CANCELED = "CANCELED"


@dataclass_json
@dataclass
class UpdateJobExecutionRequestBody:
    status: UpdateJobExecutionRequestBodyStatusEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    execution_number: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('executionNumber') }})
    expected_version: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('expectedVersion') }})
    include_job_document: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('includeJobDocument') }})
    include_job_execution_state: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('includeJobExecutionState') }})
    status_details: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('statusDetails') }})
    step_timeout_in_minutes: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('stepTimeoutInMinutes') }})
    

@dataclass
class UpdateJobExecutionRequest:
    headers: UpdateJobExecutionHeaders = field()
    path_params: UpdateJobExecutionPathParams = field()
    request: UpdateJobExecutionRequestBody = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateJobExecutionResponse:
    content_type: str = field()
    status_code: int = field()
    certificate_validation_exception: Optional[Any] = field(default=None)
    invalid_request_exception: Optional[Any] = field(default=None)
    invalid_state_transition_exception: Optional[Any] = field(default=None)
    resource_not_found_exception: Optional[Any] = field(default=None)
    service_unavailable_exception: Optional[Any] = field(default=None)
    throttling_exception: Optional[Any] = field(default=None)
    update_job_execution_response: Optional[shared.UpdateJobExecutionResponse] = field(default=None)
    
