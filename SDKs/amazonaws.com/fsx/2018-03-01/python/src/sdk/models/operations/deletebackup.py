from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from sdk.models import shared

class DeleteBackupXAmzTargetEnum(str, Enum):
    AWS_SIMBA_API_SERVICE_V20180301_DELETE_BACKUP = "AWSSimbaAPIService_v20180301.DeleteBackup"


@dataclass
class DeleteBackupHeaders:
    x_amz_target: DeleteBackupXAmzTargetEnum = field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteBackupRequest:
    headers: DeleteBackupHeaders = field()
    request: shared.DeleteBackupRequest = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class DeleteBackupResponse:
    content_type: str = field()
    status_code: int = field()
    backup_being_copied: Optional[Any] = field(default=None)
    backup_in_progress: Optional[Any] = field(default=None)
    backup_not_found: Optional[Any] = field(default=None)
    backup_restoring: Optional[Any] = field(default=None)
    bad_request: Optional[Any] = field(default=None)
    delete_backup_response: Optional[shared.DeleteBackupResponse] = field(default=None)
    incompatible_parameter_error: Optional[Any] = field(default=None)
    internal_server_error: Optional[Any] = field(default=None)
    
