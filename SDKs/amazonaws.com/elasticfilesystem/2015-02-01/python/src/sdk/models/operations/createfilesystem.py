from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class CreateFileSystemHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    
class CreateFileSystemRequestBodyPerformanceModeEnum(str, Enum):
    GENERAL_PURPOSE = "generalPurpose"
    MAX_IO = "maxIO"

class CreateFileSystemRequestBodyThroughputModeEnum(str, Enum):
    BURSTING = "bursting"
    PROVISIONED = "provisioned"


@dataclass_json
@dataclass
class CreateFileSystemRequestBody:
    availability_zone_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AvailabilityZoneName' }})
    backup: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Backup' }})
    creation_token: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreationToken' }})
    encrypted: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Encrypted' }})
    kms_key_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'KmsKeyId' }})
    performance_mode: Optional[CreateFileSystemRequestBodyPerformanceModeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PerformanceMode' }})
    provisioned_throughput_in_mibps: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ProvisionedThroughputInMibps' }})
    tags: Optional[List[shared.Tag]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Tags' }})
    throughput_mode: Optional[CreateFileSystemRequestBodyThroughputModeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ThroughputMode' }})
    

@dataclass
class CreateFileSystemRequest:
    headers: CreateFileSystemHeaders = field(default=None)
    request: CreateFileSystemRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateFileSystemResponse:
    bad_request: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    file_system_already_exists: Optional[Any] = field(default=None)
    file_system_description: Optional[shared.FileSystemDescription] = field(default=None)
    file_system_limit_exceeded: Optional[Any] = field(default=None)
    insufficient_throughput_capacity: Optional[Any] = field(default=None)
    internal_server_error: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    throughput_limit_exceeded: Optional[Any] = field(default=None)
    unsupported_availability_zone: Optional[Any] = field(default=None)
    
