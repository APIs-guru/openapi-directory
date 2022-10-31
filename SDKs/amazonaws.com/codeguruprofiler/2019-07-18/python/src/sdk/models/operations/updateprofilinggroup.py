from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class UpdateProfilingGroupPathParams:
    profiling_group_name: str = field(default=None, metadata={'path_param': { 'field_name': 'profilingGroupName', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateProfilingGroupHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class UpdateProfilingGroupRequestBodyAgentOrchestrationConfig:
    profiling_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'profilingEnabled' }})
    

@dataclass_json
@dataclass
class UpdateProfilingGroupRequestBody:
    agent_orchestration_config: UpdateProfilingGroupRequestBodyAgentOrchestrationConfig = field(default=None, metadata={'dataclasses_json': { 'field_name': 'agentOrchestrationConfig' }})
    

@dataclass
class UpdateProfilingGroupRequest:
    path_params: UpdateProfilingGroupPathParams = field(default=None)
    headers: UpdateProfilingGroupHeaders = field(default=None)
    request: UpdateProfilingGroupRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateProfilingGroupResponse:
    conflict_exception: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    internal_server_exception: Optional[Any] = field(default=None)
    resource_not_found_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    throttling_exception: Optional[Any] = field(default=None)
    update_profiling_group_response: Optional[shared.UpdateProfilingGroupResponse] = field(default=None)
    validation_exception: Optional[Any] = field(default=None)
    
