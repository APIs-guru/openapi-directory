from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared

class CopyBackupXAmzTargetEnum(str, Enum):
    AWS_SIMBA_API_SERVICE_V20180301_COPY_BACKUP = "AWSSimbaAPIService_v20180301.CopyBackup"


@dataclass
class CopyBackupHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    x_amz_target: CopyBackupXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target' }})
    

@dataclass
class CopyBackupRequest:
    headers: CopyBackupHeaders = field(default=None)
    request: shared.CopyBackupRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CopyBackupResponse:
    backup_not_found: Optional[Any] = field(default=None)
    bad_request: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    copy_backup_response: Optional[shared.CopyBackupResponse] = field(default=None)
    incompatible_parameter_error: Optional[Any] = field(default=None)
    incompatible_region_for_multi_az: Optional[Any] = field(default=None)
    internal_server_error: Optional[Any] = field(default=None)
    invalid_destination_kms_key: Optional[Any] = field(default=None)
    invalid_region: Optional[Any] = field(default=None)
    invalid_source_kms_key: Optional[Any] = field(default=None)
    service_limit_exceeded: Optional[Any] = field(default=None)
    source_backup_unavailable: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    unsupported_operation: Optional[Any] = field(default=None)
    
