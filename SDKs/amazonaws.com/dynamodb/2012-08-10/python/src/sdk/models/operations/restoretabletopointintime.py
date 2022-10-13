from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared

class RestoreTableToPointInTimeXAmzTargetEnum(str, Enum):
    DYNAMO_DB_20120810_RESTORE_TABLE_TO_POINT_IN_TIME = "DynamoDB_20120810.RestoreTableToPointInTime"


@dataclass
class RestoreTableToPointInTimeHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    x_amz_target: RestoreTableToPointInTimeXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target' }})
    

@dataclass
class RestoreTableToPointInTimeRequest:
    headers: RestoreTableToPointInTimeHeaders = field(default=None)
    request: shared.RestoreTableToPointInTimeInput = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class RestoreTableToPointInTimeResponse:
    content_type: str = field(default=None)
    internal_server_error: Optional[Any] = field(default=None)
    invalid_restore_time_exception: Optional[Any] = field(default=None)
    limit_exceeded_exception: Optional[Any] = field(default=None)
    point_in_time_recovery_unavailable_exception: Optional[Any] = field(default=None)
    restore_table_to_point_in_time_output: Optional[shared.RestoreTableToPointInTimeOutput] = field(default=None)
    status_code: int = field(default=None)
    table_already_exists_exception: Optional[Any] = field(default=None)
    table_in_use_exception: Optional[Any] = field(default=None)
    table_not_found_exception: Optional[Any] = field(default=None)
    
