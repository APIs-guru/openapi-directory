from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared

class RestoreTableFromBackupXAmzTargetEnum(str, Enum):
    DYNAMO_DB_20120810_RESTORE_TABLE_FROM_BACKUP = "DynamoDB_20120810.RestoreTableFromBackup"


@dataclass
class RestoreTableFromBackupHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    x_amz_target: RestoreTableFromBackupXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    

@dataclass
class RestoreTableFromBackupRequest:
    headers: RestoreTableFromBackupHeaders = field(default=None)
    request: shared.RestoreTableFromBackupInput = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class RestoreTableFromBackupResponse:
    backup_in_use_exception: Optional[Any] = field(default=None)
    backup_not_found_exception: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    internal_server_error: Optional[Any] = field(default=None)
    limit_exceeded_exception: Optional[Any] = field(default=None)
    restore_table_from_backup_output: Optional[shared.RestoreTableFromBackupOutput] = field(default=None)
    status_code: int = field(default=None)
    table_already_exists_exception: Optional[Any] = field(default=None)
    table_in_use_exception: Optional[Any] = field(default=None)
    
