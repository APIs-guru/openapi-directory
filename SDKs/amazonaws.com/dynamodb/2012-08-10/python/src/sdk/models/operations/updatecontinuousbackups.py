from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared

class UpdateContinuousBackupsXAmzTargetEnum(str, Enum):
    DYNAMO_DB_20120810_UPDATE_CONTINUOUS_BACKUPS = "DynamoDB_20120810.UpdateContinuousBackups"


@dataclass
class UpdateContinuousBackupsHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    x_amz_target: UpdateContinuousBackupsXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target' }})
    

@dataclass
class UpdateContinuousBackupsRequest:
    headers: UpdateContinuousBackupsHeaders = field(default=None)
    request: shared.UpdateContinuousBackupsInput = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateContinuousBackupsResponse:
    content_type: str = field(default=None)
    continuous_backups_unavailable_exception: Optional[Any] = field(default=None)
    internal_server_error: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    table_not_found_exception: Optional[Any] = field(default=None)
    update_continuous_backups_output: Optional[shared.UpdateContinuousBackupsOutput] = field(default=None)
    
