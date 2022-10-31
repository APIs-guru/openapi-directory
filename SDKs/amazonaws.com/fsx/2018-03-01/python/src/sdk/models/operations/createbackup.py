from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared

class CreateBackupXAmzTargetEnum(str, Enum):
    AWS_SIMBA_API_SERVICE_V20180301_CREATE_BACKUP = "AWSSimbaAPIService_v20180301.CreateBackup"


@dataclass
class CreateBackupHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    x_amz_target: CreateBackupXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateBackupRequest:
    headers: CreateBackupHeaders = field(default=None)
    request: shared.CreateBackupRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateBackupResponse:
    backup_in_progress: Optional[Any] = field(default=None)
    bad_request: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    create_backup_response: Optional[shared.CreateBackupResponse] = field(default=None)
    file_system_not_found: Optional[Any] = field(default=None)
    incompatible_parameter_error: Optional[Any] = field(default=None)
    internal_server_error: Optional[Any] = field(default=None)
    service_limit_exceeded: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    unsupported_operation: Optional[Any] = field(default=None)
    volume_not_found: Optional[Any] = field(default=None)
    
