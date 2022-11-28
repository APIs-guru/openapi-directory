from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from sdk.models import shared

class StartExportTaskXAmzTargetEnum(str, Enum):
    AWS_POSEIDON_SERVICE_V2015_11_01_START_EXPORT_TASK = "AWSPoseidonService_V2015_11_01.StartExportTask"


@dataclass
class StartExportTaskHeaders:
    x_amz_target: StartExportTaskXAmzTargetEnum = field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class StartExportTaskRequest:
    headers: StartExportTaskHeaders = field()
    request: shared.StartExportTaskRequest = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class StartExportTaskResponse:
    content_type: str = field()
    status_code: int = field()
    authorization_error_exception: Optional[Any] = field(default=None)
    home_region_not_set_exception: Optional[Any] = field(default=None)
    invalid_parameter_exception: Optional[Any] = field(default=None)
    invalid_parameter_value_exception: Optional[Any] = field(default=None)
    operation_not_permitted_exception: Optional[Any] = field(default=None)
    server_internal_error_exception: Optional[Any] = field(default=None)
    start_export_task_response: Optional[shared.StartExportTaskResponse] = field(default=None)
    
