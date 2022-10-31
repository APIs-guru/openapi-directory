from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class CreateQuantumTaskHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class CreateQuantumTaskRequestBody:
    action: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'action' }})
    client_token: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'clientToken' }})
    device_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deviceArn' }})
    device_parameters: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deviceParameters' }})
    output_s3_bucket: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'outputS3Bucket' }})
    output_s3_key_prefix: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'outputS3KeyPrefix' }})
    shots: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'shots' }})
    tags: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tags' }})
    

@dataclass
class CreateQuantumTaskRequest:
    headers: CreateQuantumTaskHeaders = field(default=None)
    request: CreateQuantumTaskRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateQuantumTaskResponse:
    access_denied_exception: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    create_quantum_task_response: Optional[shared.CreateQuantumTaskResponse] = field(default=None)
    device_offline_exception: Optional[Any] = field(default=None)
    internal_service_exception: Optional[Any] = field(default=None)
    service_quota_exceeded_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    throttling_exception: Optional[Any] = field(default=None)
    validation_exception: Optional[Any] = field(default=None)
    
