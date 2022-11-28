from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from sdk.models import shared

class CreateFileSystemFromBackupXAmzTargetEnum(str, Enum):
    AWS_SIMBA_API_SERVICE_V20180301_CREATE_FILE_SYSTEM_FROM_BACKUP = "AWSSimbaAPIService_v20180301.CreateFileSystemFromBackup"


@dataclass
class CreateFileSystemFromBackupHeaders:
    x_amz_target: CreateFileSystemFromBackupXAmzTargetEnum = field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateFileSystemFromBackupRequest:
    headers: CreateFileSystemFromBackupHeaders = field()
    request: shared.CreateFileSystemFromBackupRequest = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateFileSystemFromBackupResponse:
    content_type: str = field()
    status_code: int = field()
    active_directory_error: Optional[Any] = field(default=None)
    backup_not_found: Optional[Any] = field(default=None)
    bad_request: Optional[Any] = field(default=None)
    create_file_system_from_backup_response: Optional[shared.CreateFileSystemFromBackupResponse] = field(default=None)
    incompatible_parameter_error: Optional[Any] = field(default=None)
    internal_server_error: Optional[Any] = field(default=None)
    invalid_network_settings: Optional[Any] = field(default=None)
    invalid_per_unit_storage_throughput: Optional[Any] = field(default=None)
    missing_file_system_configuration: Optional[Any] = field(default=None)
    service_limit_exceeded: Optional[Any] = field(default=None)
    
