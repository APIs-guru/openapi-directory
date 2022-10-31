from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared

class CreateFileSystemXAmzTargetEnum(str, Enum):
    AWS_SIMBA_API_SERVICE_V20180301_CREATE_FILE_SYSTEM = "AWSSimbaAPIService_v20180301.CreateFileSystem"


@dataclass
class CreateFileSystemHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    x_amz_target: CreateFileSystemXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateFileSystemRequest:
    headers: CreateFileSystemHeaders = field(default=None)
    request: shared.CreateFileSystemRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateFileSystemResponse:
    active_directory_error: Optional[Any] = field(default=None)
    bad_request: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    create_file_system_response: Optional[shared.CreateFileSystemResponse] = field(default=None)
    incompatible_parameter_error: Optional[Any] = field(default=None)
    internal_server_error: Optional[Any] = field(default=None)
    invalid_export_path: Optional[Any] = field(default=None)
    invalid_import_path: Optional[Any] = field(default=None)
    invalid_network_settings: Optional[Any] = field(default=None)
    invalid_per_unit_storage_throughput: Optional[Any] = field(default=None)
    missing_file_system_configuration: Optional[Any] = field(default=None)
    service_limit_exceeded: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
