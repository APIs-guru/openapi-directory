from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared

class CreateFileSystemFromBackupXAmzTargetEnum(str, Enum):
    AWS_SIMBA_API_SERVICE_V20180301_CREATE_FILE_SYSTEM_FROM_BACKUP = "AWSSimbaAPIService_v20180301.CreateFileSystemFromBackup"


@dataclass
class CreateFileSystemFromBackupHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    x_amz_target: CreateFileSystemFromBackupXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target' }})
    

@dataclass
class CreateFileSystemFromBackupRequest:
    headers: CreateFileSystemFromBackupHeaders = field(default=None)
    request: shared.CreateFileSystemFromBackupRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateFileSystemFromBackupResponse:
    active_directory_error: Optional[Any] = field(default=None)
    backup_not_found: Optional[Any] = field(default=None)
    bad_request: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    create_file_system_from_backup_response: Optional[shared.CreateFileSystemFromBackupResponse] = field(default=None)
    incompatible_parameter_error: Optional[Any] = field(default=None)
    internal_server_error: Optional[Any] = field(default=None)
    invalid_network_settings: Optional[Any] = field(default=None)
    invalid_per_unit_storage_throughput: Optional[Any] = field(default=None)
    missing_file_system_configuration: Optional[Any] = field(default=None)
    service_limit_exceeded: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
