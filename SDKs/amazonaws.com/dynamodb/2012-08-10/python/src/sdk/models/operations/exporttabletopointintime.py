from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from sdk.models import shared

class ExportTableToPointInTimeXAmzTargetEnum(str, Enum):
    DYNAMO_DB_20120810_EXPORT_TABLE_TO_POINT_IN_TIME = "DynamoDB_20120810.ExportTableToPointInTime"


@dataclass
class ExportTableToPointInTimeHeaders:
    x_amz_target: ExportTableToPointInTimeXAmzTargetEnum = field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class ExportTableToPointInTimeRequest:
    headers: ExportTableToPointInTimeHeaders = field()
    request: shared.ExportTableToPointInTimeInput = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class ExportTableToPointInTimeResponse:
    content_type: str = field()
    status_code: int = field()
    export_conflict_exception: Optional[Any] = field(default=None)
    export_table_to_point_in_time_output: Optional[shared.ExportTableToPointInTimeOutput] = field(default=None)
    internal_server_error: Optional[Any] = field(default=None)
    invalid_export_time_exception: Optional[Any] = field(default=None)
    limit_exceeded_exception: Optional[Any] = field(default=None)
    point_in_time_recovery_unavailable_exception: Optional[Any] = field(default=None)
    table_not_found_exception: Optional[Any] = field(default=None)
    
