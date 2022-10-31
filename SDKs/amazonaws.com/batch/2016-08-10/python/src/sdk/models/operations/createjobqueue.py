from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class CreateJobQueueHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    
class CreateJobQueueRequestBodyStateEnum(str, Enum):
    ENABLED = "ENABLED"
    DISABLED = "DISABLED"


@dataclass_json
@dataclass
class CreateJobQueueRequestBody:
    compute_environment_order: List[shared.ComputeEnvironmentOrder] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'computeEnvironmentOrder' }})
    job_queue_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'jobQueueName' }})
    priority: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'priority' }})
    state: Optional[CreateJobQueueRequestBodyStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'state' }})
    tags: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tags' }})
    

@dataclass
class CreateJobQueueRequest:
    headers: CreateJobQueueHeaders = field(default=None)
    request: CreateJobQueueRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateJobQueueResponse:
    client_exception: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    create_job_queue_response: Optional[shared.CreateJobQueueResponse] = field(default=None)
    server_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
