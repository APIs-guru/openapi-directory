from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared

class RestoreBackupXAmzTargetEnum(str, Enum):
    BALDR_API_SERVICE_RESTORE_BACKUP = "BaldrApiService.RestoreBackup"


@dataclass
class RestoreBackupHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    x_amz_target: RestoreBackupXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    

@dataclass
class RestoreBackupRequest:
    headers: RestoreBackupHeaders = field(default=None)
    request: shared.RestoreBackupRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class RestoreBackupResponse:
    cloud_hsm_access_denied_exception: Optional[Any] = field(default=None)
    cloud_hsm_internal_failure_exception: Optional[Any] = field(default=None)
    cloud_hsm_invalid_request_exception: Optional[Any] = field(default=None)
    cloud_hsm_resource_not_found_exception: Optional[Any] = field(default=None)
    cloud_hsm_service_exception: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    restore_backup_response: Optional[shared.RestoreBackupResponse] = field(default=None)
    status_code: int = field(default=None)
    
