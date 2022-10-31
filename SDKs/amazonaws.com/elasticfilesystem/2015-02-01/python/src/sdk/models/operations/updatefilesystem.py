from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class UpdateFileSystemPathParams:
    file_system_id: str = field(default=None, metadata={'path_param': { 'field_name': 'FileSystemId', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateFileSystemHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    
class UpdateFileSystemRequestBodyThroughputModeEnum(str, Enum):
    BURSTING = "bursting"
    PROVISIONED = "provisioned"


@dataclass_json
@dataclass
class UpdateFileSystemRequestBody:
    provisioned_throughput_in_mibps: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ProvisionedThroughputInMibps' }})
    throughput_mode: Optional[UpdateFileSystemRequestBodyThroughputModeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ThroughputMode' }})
    

@dataclass
class UpdateFileSystemRequest:
    path_params: UpdateFileSystemPathParams = field(default=None)
    headers: UpdateFileSystemHeaders = field(default=None)
    request: UpdateFileSystemRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateFileSystemResponse:
    bad_request: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    file_system_description: Optional[shared.FileSystemDescription] = field(default=None)
    file_system_not_found: Optional[Any] = field(default=None)
    incorrect_file_system_life_cycle_state: Optional[Any] = field(default=None)
    insufficient_throughput_capacity: Optional[Any] = field(default=None)
    internal_server_error: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    throughput_limit_exceeded: Optional[Any] = field(default=None)
    too_many_requests: Optional[Any] = field(default=None)
    
