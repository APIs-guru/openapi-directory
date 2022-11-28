from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class CreateJobTemplatePathParams:
    job_template_id: str = field(metadata={'path_param': { 'field_name': 'jobTemplateId', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateJobTemplateHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class CreateJobTemplateRequestBodyAbortConfig:
    r"""CreateJobTemplateRequestBodyAbortConfig
    The criteria that determine when and how a job abort takes place.
    """
    
    criteria_list: Optional[List[shared.AbortCriteria]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('criteriaList') }})
    

@dataclass_json
@dataclass
class CreateJobTemplateRequestBodyJobExecutionsRolloutConfig:
    r"""CreateJobTemplateRequestBodyJobExecutionsRolloutConfig
    Allows you to create a staged rollout of a job.
    """
    
    exponential_rate: Optional[shared.ExponentialRolloutRate] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('exponentialRate') }})
    maximum_per_minute: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maximumPerMinute') }})
    

@dataclass_json
@dataclass
class CreateJobTemplateRequestBodyPresignedURLConfig:
    r"""CreateJobTemplateRequestBodyPresignedURLConfig
    Configuration for pre-signed S3 URLs.
    """
    
    expires_in_sec: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('expiresInSec') }})
    role_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('roleArn') }})
    

@dataclass_json
@dataclass
class CreateJobTemplateRequestBodyTimeoutConfig:
    r"""CreateJobTemplateRequestBodyTimeoutConfig
    Specifies the amount of time each device has to finish its execution of the job. A timer is started when the job execution status is set to <code>IN_PROGRESS</code>. If the job execution status is not set to another terminal state before the timer expires, it will be automatically set to <code>TIMED_OUT</code>.
    """
    
    in_progress_timeout_in_minutes: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('inProgressTimeoutInMinutes') }})
    

@dataclass_json
@dataclass
class CreateJobTemplateRequestBody:
    description: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    abort_config: Optional[CreateJobTemplateRequestBodyAbortConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('abortConfig') }})
    document: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('document') }})
    document_source: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('documentSource') }})
    job_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('jobArn') }})
    job_executions_rollout_config: Optional[CreateJobTemplateRequestBodyJobExecutionsRolloutConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('jobExecutionsRolloutConfig') }})
    presigned_url_config: Optional[CreateJobTemplateRequestBodyPresignedURLConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('presignedUrlConfig') }})
    tags: Optional[List[shared.Tag]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    timeout_config: Optional[CreateJobTemplateRequestBodyTimeoutConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timeoutConfig') }})
    

@dataclass
class CreateJobTemplateRequest:
    headers: CreateJobTemplateHeaders = field()
    path_params: CreateJobTemplatePathParams = field()
    request: CreateJobTemplateRequestBody = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateJobTemplateResponse:
    content_type: str = field()
    status_code: int = field()
    conflict_exception: Optional[Any] = field(default=None)
    create_job_template_response: Optional[shared.CreateJobTemplateResponse] = field(default=None)
    internal_failure_exception: Optional[Any] = field(default=None)
    invalid_request_exception: Optional[Any] = field(default=None)
    limit_exceeded_exception: Optional[Any] = field(default=None)
    resource_not_found_exception: Optional[Any] = field(default=None)
    throttling_exception: Optional[Any] = field(default=None)
    
