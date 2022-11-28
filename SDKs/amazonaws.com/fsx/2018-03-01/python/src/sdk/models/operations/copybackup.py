from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from sdk.models import shared

class CopyBackupXAmzTargetEnum(str, Enum):
    AWS_SIMBA_API_SERVICE_V20180301_COPY_BACKUP = "AWSSimbaAPIService_v20180301.CopyBackup"


@dataclass
class CopyBackupHeaders:
    x_amz_target: CopyBackupXAmzTargetEnum = field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class CopyBackupRequest:
    headers: CopyBackupHeaders = field()
    request: shared.CopyBackupRequest = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CopyBackupResponse:
    content_type: str = field()
    status_code: int = field()
    backup_not_found: Optional[Any] = field(default=None)
    bad_request: Optional[Any] = field(default=None)
    copy_backup_response: Optional[shared.CopyBackupResponse] = field(default=None)
    incompatible_parameter_error: Optional[Any] = field(default=None)
    incompatible_region_for_multi_az: Optional[Any] = field(default=None)
    internal_server_error: Optional[Any] = field(default=None)
    invalid_destination_kms_key: Optional[Any] = field(default=None)
    invalid_region: Optional[Any] = field(default=None)
    invalid_source_kms_key: Optional[Any] = field(default=None)
    service_limit_exceeded: Optional[Any] = field(default=None)
    source_backup_unavailable: Optional[Any] = field(default=None)
    unsupported_operation: Optional[Any] = field(default=None)
    
