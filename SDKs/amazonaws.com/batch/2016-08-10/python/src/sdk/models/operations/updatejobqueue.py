from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class UpdateJobQueueHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    
class UpdateJobQueueRequestBodyStateEnum(str, Enum):
    ENABLED = "ENABLED"
    DISABLED = "DISABLED"


@dataclass_json
@dataclass
class UpdateJobQueueRequestBody:
    compute_environment_order: Optional[List[shared.ComputeEnvironmentOrder]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'computeEnvironmentOrder' }})
    job_queue: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'jobQueue' }})
    priority: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'priority' }})
    state: Optional[UpdateJobQueueRequestBodyStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'state' }})
    

@dataclass
class UpdateJobQueueRequest:
    headers: UpdateJobQueueHeaders = field(default=None)
    request: UpdateJobQueueRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateJobQueueResponse:
    client_exception: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    server_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    update_job_queue_response: Optional[shared.UpdateJobQueueResponse] = field(default=None)
    
