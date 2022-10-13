from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class UpdateJobPathParams:
    job_id: str = field(default=None, metadata={'path_param': { 'field_name': 'jobId', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateJobQueryParams:
    namespace_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'namespaceId', 'style': 'form', 'explode': True }})
    

@dataclass
class UpdateJobHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    

@dataclass_json
@dataclass
class UpdateJobRequestBodyAbortConfig:
    criteria_list: Optional[List[shared.AbortCriteria]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'criteriaList' }})
    

@dataclass_json
@dataclass
class UpdateJobRequestBodyJobExecutionsRolloutConfig:
    exponential_rate: Optional[shared.ExponentialRolloutRate] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'exponentialRate' }})
    maximum_per_minute: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maximumPerMinute' }})
    

@dataclass_json
@dataclass
class UpdateJobRequestBodyPresignedURLConfig:
    expires_in_sec: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'expiresInSec' }})
    role_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'roleArn' }})
    

@dataclass_json
@dataclass
class UpdateJobRequestBodyTimeoutConfig:
    in_progress_timeout_in_minutes: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'inProgressTimeoutInMinutes' }})
    

@dataclass_json
@dataclass
class UpdateJobRequestBody:
    abort_config: Optional[UpdateJobRequestBodyAbortConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'abortConfig' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    job_executions_rollout_config: Optional[UpdateJobRequestBodyJobExecutionsRolloutConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'jobExecutionsRolloutConfig' }})
    presigned_url_config: Optional[UpdateJobRequestBodyPresignedURLConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'presignedUrlConfig' }})
    timeout_config: Optional[UpdateJobRequestBodyTimeoutConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timeoutConfig' }})
    

@dataclass
class UpdateJobRequest:
    path_params: UpdateJobPathParams = field(default=None)
    query_params: UpdateJobQueryParams = field(default=None)
    headers: UpdateJobHeaders = field(default=None)
    request: UpdateJobRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateJobResponse:
    content_type: str = field(default=None)
    invalid_request_exception: Optional[Any] = field(default=None)
    resource_not_found_exception: Optional[Any] = field(default=None)
    service_unavailable_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    throttling_exception: Optional[Any] = field(default=None)
    
