from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class CreateProfilingGroupQueryParams:
    client_token: str = field(default=None, metadata={'query_param': { 'field_name': 'clientToken', 'style': 'form', 'explode': True }})
    

@dataclass
class CreateProfilingGroupHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class CreateProfilingGroupRequestBodyAgentOrchestrationConfig:
    profiling_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'profilingEnabled' }})
    
class CreateProfilingGroupRequestBodyComputePlatformEnum(str, Enum):
    DEFAULT = "Default"
    AWS_LAMBDA = "AWSLambda"


@dataclass_json
@dataclass
class CreateProfilingGroupRequestBody:
    agent_orchestration_config: Optional[CreateProfilingGroupRequestBodyAgentOrchestrationConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'agentOrchestrationConfig' }})
    compute_platform: Optional[CreateProfilingGroupRequestBodyComputePlatformEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'computePlatform' }})
    profiling_group_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'profilingGroupName' }})
    tags: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tags' }})
    

@dataclass
class CreateProfilingGroupRequest:
    query_params: CreateProfilingGroupQueryParams = field(default=None)
    headers: CreateProfilingGroupHeaders = field(default=None)
    request: CreateProfilingGroupRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateProfilingGroupResponse:
    conflict_exception: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    create_profiling_group_response: Optional[shared.CreateProfilingGroupResponse] = field(default=None)
    internal_server_exception: Optional[Any] = field(default=None)
    service_quota_exceeded_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    throttling_exception: Optional[Any] = field(default=None)
    validation_exception: Optional[Any] = field(default=None)
    
