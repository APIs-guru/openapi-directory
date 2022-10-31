from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class CreateJobPathParams:
    job_id: str = field(default=None, metadata={'path_param': { 'field_name': 'jobId', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateJobHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class CreateJobRequestBodyAbortConfig:
    criteria_list: Optional[List[shared.AbortCriteria]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'criteriaList' }})
    

@dataclass_json
@dataclass
class CreateJobRequestBodyJobExecutionsRolloutConfig:
    exponential_rate: Optional[shared.ExponentialRolloutRate] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'exponentialRate' }})
    maximum_per_minute: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maximumPerMinute' }})
    

@dataclass_json
@dataclass
class CreateJobRequestBodyPresignedURLConfig:
    expires_in_sec: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'expiresInSec' }})
    role_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'roleArn' }})
    
class CreateJobRequestBodyTargetSelectionEnum(str, Enum):
    CONTINUOUS = "CONTINUOUS"
    SNAPSHOT = "SNAPSHOT"


@dataclass_json
@dataclass
class CreateJobRequestBodyTimeoutConfig:
    in_progress_timeout_in_minutes: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'inProgressTimeoutInMinutes' }})
    

@dataclass_json
@dataclass
class CreateJobRequestBody:
    abort_config: Optional[CreateJobRequestBodyAbortConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'abortConfig' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    document: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'document' }})
    document_source: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'documentSource' }})
    job_executions_rollout_config: Optional[CreateJobRequestBodyJobExecutionsRolloutConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'jobExecutionsRolloutConfig' }})
    job_template_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'jobTemplateArn' }})
    namespace_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'namespaceId' }})
    presigned_url_config: Optional[CreateJobRequestBodyPresignedURLConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'presignedUrlConfig' }})
    tags: Optional[List[shared.Tag]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tags' }})
    target_selection: Optional[CreateJobRequestBodyTargetSelectionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'targetSelection' }})
    targets: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'targets' }})
    timeout_config: Optional[CreateJobRequestBodyTimeoutConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timeoutConfig' }})
    

@dataclass
class CreateJobRequest:
    path_params: CreateJobPathParams = field(default=None)
    headers: CreateJobHeaders = field(default=None)
    request: CreateJobRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateJobResponse:
    content_type: str = field(default=None)
    create_job_response: Optional[shared.CreateJobResponse] = field(default=None)
    invalid_request_exception: Optional[Any] = field(default=None)
    limit_exceeded_exception: Optional[Any] = field(default=None)
    resource_already_exists_exception: Optional[Any] = field(default=None)
    resource_not_found_exception: Optional[Any] = field(default=None)
    service_unavailable_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    throttling_exception: Optional[Any] = field(default=None)
    
