from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class UpdateProfilingGroupPathParams:
    profiling_group_name: str = field(metadata={'path_param': { 'field_name': 'profilingGroupName', 'style': 'simple', 'explode': False }})
    

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
    r"""UpdateProfilingGroupRequestBodyAgentOrchestrationConfig
     Specifies whether profiling is enabled or disabled for a profiling group. It is used by <a href=\"https://docs.aws.amazon.com/codeguru/latest/profiler-api/API_ConfigureAgent.html\"> <code>ConfigureAgent</code> </a> to enable or disable profiling for a profiling group. 
    """
    
    profiling_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('profilingEnabled') }})
    

@dataclass_json
@dataclass
class UpdateProfilingGroupRequestBody:
    agent_orchestration_config: UpdateProfilingGroupRequestBodyAgentOrchestrationConfig = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('agentOrchestrationConfig') }})
    

@dataclass
class UpdateProfilingGroupRequest:
    headers: UpdateProfilingGroupHeaders = field()
    path_params: UpdateProfilingGroupPathParams = field()
    request: UpdateProfilingGroupRequestBody = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateProfilingGroupResponse:
    content_type: str = field()
    status_code: int = field()
    conflict_exception: Optional[Any] = field(default=None)
    internal_server_exception: Optional[Any] = field(default=None)
    resource_not_found_exception: Optional[Any] = field(default=None)
    throttling_exception: Optional[Any] = field(default=None)
    update_profiling_group_response: Optional[shared.UpdateProfilingGroupResponse] = field(default=None)
    validation_exception: Optional[Any] = field(default=None)
    
