from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class CreateOtaUpdatePathParams:
    ota_update_id: str = field(metadata={'path_param': { 'field_name': 'otaUpdateId', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateOtaUpdateHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class CreateOtaUpdateRequestBodyAwsJobAbortConfig:
    r"""CreateOtaUpdateRequestBodyAwsJobAbortConfig
    The criteria that determine when and how a job abort takes place.
    """
    
    abort_criteria_list: Optional[List[shared.AwsJobAbortCriteria]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('abortCriteriaList') }})
    

@dataclass_json
@dataclass
class CreateOtaUpdateRequestBodyAwsJobExecutionsRolloutConfig:
    r"""CreateOtaUpdateRequestBodyAwsJobExecutionsRolloutConfig
    Configuration for the rollout of OTA updates.
    """
    
    exponential_rate: Optional[shared.AwsJobExponentialRolloutRate] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('exponentialRate') }})
    maximum_per_minute: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maximumPerMinute') }})
    

@dataclass_json
@dataclass
class CreateOtaUpdateRequestBodyAwsJobPresignedURLConfig:
    r"""CreateOtaUpdateRequestBodyAwsJobPresignedURLConfig
    Configuration information for pre-signed URLs. Valid when <code>protocols</code> contains HTTP.
    """
    
    expires_in_sec: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('expiresInSec') }})
    

@dataclass_json
@dataclass
class CreateOtaUpdateRequestBodyAwsJobTimeoutConfig:
    r"""CreateOtaUpdateRequestBodyAwsJobTimeoutConfig
    Specifies the amount of time each device has to finish its execution of the job. A timer is started when the job execution status is set to <code>IN_PROGRESS</code>. If the job execution status is not set to another terminal state before the timer expires, it will be automatically set to <code>TIMED_OUT</code>.
    """
    
    in_progress_timeout_in_minutes: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('inProgressTimeoutInMinutes') }})
    
class CreateOtaUpdateRequestBodyTargetSelectionEnum(str, Enum):
    CONTINUOUS = "CONTINUOUS"
    SNAPSHOT = "SNAPSHOT"


@dataclass_json
@dataclass
class CreateOtaUpdateRequestBody:
    files: List[shared.OtaUpdateFile] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('files') }})
    role_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('roleArn') }})
    targets: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('targets') }})
    additional_parameters: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('additionalParameters') }})
    aws_job_abort_config: Optional[CreateOtaUpdateRequestBodyAwsJobAbortConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('awsJobAbortConfig') }})
    aws_job_executions_rollout_config: Optional[CreateOtaUpdateRequestBodyAwsJobExecutionsRolloutConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('awsJobExecutionsRolloutConfig') }})
    aws_job_presigned_url_config: Optional[CreateOtaUpdateRequestBodyAwsJobPresignedURLConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('awsJobPresignedUrlConfig') }})
    aws_job_timeout_config: Optional[CreateOtaUpdateRequestBodyAwsJobTimeoutConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('awsJobTimeoutConfig') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    protocols: Optional[List[shared.ProtocolEnum]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('protocols') }})
    tags: Optional[List[shared.Tag]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    target_selection: Optional[CreateOtaUpdateRequestBodyTargetSelectionEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('targetSelection') }})
    

@dataclass
class CreateOtaUpdateRequest:
    headers: CreateOtaUpdateHeaders = field()
    path_params: CreateOtaUpdatePathParams = field()
    request: CreateOtaUpdateRequestBody = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateOtaUpdateResponse:
    content_type: str = field()
    status_code: int = field()
    create_ota_update_response: Optional[shared.CreateOtaUpdateResponse] = field(default=None)
    internal_failure_exception: Optional[Any] = field(default=None)
    invalid_request_exception: Optional[Any] = field(default=None)
    limit_exceeded_exception: Optional[Any] = field(default=None)
    resource_already_exists_exception: Optional[Any] = field(default=None)
    resource_not_found_exception: Optional[Any] = field(default=None)
    service_unavailable_exception: Optional[Any] = field(default=None)
    throttling_exception: Optional[Any] = field(default=None)
    unauthorized_exception: Optional[Any] = field(default=None)
    
