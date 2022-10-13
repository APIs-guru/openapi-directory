from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class CreateJobTemplatePathParams:
    job_template_id: str = field(default=None, metadata={'path_param': { 'field_name': 'jobTemplateId', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateJobTemplateHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    

@dataclass_json
@dataclass
class CreateJobTemplateRequestBodyAbortConfig:
    criteria_list: Optional[List[shared.AbortCriteria]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'criteriaList' }})
    

@dataclass_json
@dataclass
class CreateJobTemplateRequestBodyJobExecutionsRolloutConfig:
    exponential_rate: Optional[shared.ExponentialRolloutRate] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'exponentialRate' }})
    maximum_per_minute: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maximumPerMinute' }})
    

@dataclass_json
@dataclass
class CreateJobTemplateRequestBodyPresignedURLConfig:
    expires_in_sec: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'expiresInSec' }})
    role_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'roleArn' }})
    

@dataclass_json
@dataclass
class CreateJobTemplateRequestBodyTimeoutConfig:
    in_progress_timeout_in_minutes: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'inProgressTimeoutInMinutes' }})
    

@dataclass_json
@dataclass
class CreateJobTemplateRequestBody:
    abort_config: Optional[CreateJobTemplateRequestBodyAbortConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'abortConfig' }})
    description: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    document: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'document' }})
    document_source: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'documentSource' }})
    job_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'jobArn' }})
    job_executions_rollout_config: Optional[CreateJobTemplateRequestBodyJobExecutionsRolloutConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'jobExecutionsRolloutConfig' }})
    presigned_url_config: Optional[CreateJobTemplateRequestBodyPresignedURLConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'presignedUrlConfig' }})
    tags: Optional[List[shared.Tag]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tags' }})
    timeout_config: Optional[CreateJobTemplateRequestBodyTimeoutConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timeoutConfig' }})
    

@dataclass
class CreateJobTemplateRequest:
    path_params: CreateJobTemplatePathParams = field(default=None)
    headers: CreateJobTemplateHeaders = field(default=None)
    request: CreateJobTemplateRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateJobTemplateResponse:
    conflict_exception: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    create_job_template_response: Optional[shared.CreateJobTemplateResponse] = field(default=None)
    internal_failure_exception: Optional[Any] = field(default=None)
    invalid_request_exception: Optional[Any] = field(default=None)
    limit_exceeded_exception: Optional[Any] = field(default=None)
    resource_not_found_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    throttling_exception: Optional[Any] = field(default=None)
    
