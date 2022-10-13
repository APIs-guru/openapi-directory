from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class CreateOtaUpdatePathParams:
    ota_update_id: str = field(default=None, metadata={'path_param': { 'field_name': 'otaUpdateId', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateOtaUpdateHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    

@dataclass_json
@dataclass
class CreateOtaUpdateRequestBodyAwsJobAbortConfig:
    abort_criteria_list: Optional[List[shared.AwsJobAbortCriteria]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'abortCriteriaList' }})
    

@dataclass_json
@dataclass
class CreateOtaUpdateRequestBodyAwsJobExecutionsRolloutConfig:
    exponential_rate: Optional[shared.AwsJobExponentialRolloutRate] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'exponentialRate' }})
    maximum_per_minute: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maximumPerMinute' }})
    

@dataclass_json
@dataclass
class CreateOtaUpdateRequestBodyAwsJobPresignedURLConfig:
    expires_in_sec: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'expiresInSec' }})
    

@dataclass_json
@dataclass
class CreateOtaUpdateRequestBodyAwsJobTimeoutConfig:
    in_progress_timeout_in_minutes: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'inProgressTimeoutInMinutes' }})
    
class CreateOtaUpdateRequestBodyTargetSelectionEnum(str, Enum):
    CONTINUOUS = "CONTINUOUS"
    SNAPSHOT = "SNAPSHOT"


@dataclass_json
@dataclass
class CreateOtaUpdateRequestBody:
    additional_parameters: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'additionalParameters' }})
    aws_job_abort_config: Optional[CreateOtaUpdateRequestBodyAwsJobAbortConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'awsJobAbortConfig' }})
    aws_job_executions_rollout_config: Optional[CreateOtaUpdateRequestBodyAwsJobExecutionsRolloutConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'awsJobExecutionsRolloutConfig' }})
    aws_job_presigned_url_config: Optional[CreateOtaUpdateRequestBodyAwsJobPresignedURLConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'awsJobPresignedUrlConfig' }})
    aws_job_timeout_config: Optional[CreateOtaUpdateRequestBodyAwsJobTimeoutConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'awsJobTimeoutConfig' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    files: List[shared.OtaUpdateFile] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'files' }})
    protocols: Optional[List[shared.ProtocolEnum]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'protocols' }})
    role_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'roleArn' }})
    tags: Optional[List[shared.Tag]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tags' }})
    target_selection: Optional[CreateOtaUpdateRequestBodyTargetSelectionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'targetSelection' }})
    targets: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'targets' }})
    

@dataclass
class CreateOtaUpdateRequest:
    path_params: CreateOtaUpdatePathParams = field(default=None)
    headers: CreateOtaUpdateHeaders = field(default=None)
    request: CreateOtaUpdateRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateOtaUpdateResponse:
    content_type: str = field(default=None)
    create_ota_update_response: Optional[shared.CreateOtaUpdateResponse] = field(default=None)
    internal_failure_exception: Optional[Any] = field(default=None)
    invalid_request_exception: Optional[Any] = field(default=None)
    limit_exceeded_exception: Optional[Any] = field(default=None)
    resource_already_exists_exception: Optional[Any] = field(default=None)
    resource_not_found_exception: Optional[Any] = field(default=None)
    service_unavailable_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    throttling_exception: Optional[Any] = field(default=None)
    unauthorized_exception: Optional[Any] = field(default=None)
    
