from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class UpdateComputeEnvironmentHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class UpdateComputeEnvironmentRequestBodyComputeResources:
    desiredv_cpus: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'desiredvCpus' }})
    maxv_cpus: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maxvCpus' }})
    minv_cpus: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'minvCpus' }})
    security_group_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'securityGroupIds' }})
    subnets: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'subnets' }})
    
class UpdateComputeEnvironmentRequestBodyStateEnum(str, Enum):
    ENABLED = "ENABLED"
    DISABLED = "DISABLED"


@dataclass_json
@dataclass
class UpdateComputeEnvironmentRequestBody:
    compute_environment: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'computeEnvironment' }})
    compute_resources: Optional[UpdateComputeEnvironmentRequestBodyComputeResources] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'computeResources' }})
    service_role: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'serviceRole' }})
    state: Optional[UpdateComputeEnvironmentRequestBodyStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'state' }})
    

@dataclass
class UpdateComputeEnvironmentRequest:
    headers: UpdateComputeEnvironmentHeaders = field(default=None)
    request: UpdateComputeEnvironmentRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateComputeEnvironmentResponse:
    client_exception: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    server_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    update_compute_environment_response: Optional[shared.UpdateComputeEnvironmentResponse] = field(default=None)
    
