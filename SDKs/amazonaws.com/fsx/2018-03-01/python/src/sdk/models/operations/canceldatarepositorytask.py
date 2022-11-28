from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from sdk.models import shared

class CancelDataRepositoryTaskXAmzTargetEnum(str, Enum):
    AWS_SIMBA_API_SERVICE_V20180301_CANCEL_DATA_REPOSITORY_TASK = "AWSSimbaAPIService_v20180301.CancelDataRepositoryTask"


@dataclass
class CancelDataRepositoryTaskHeaders:
    x_amz_target: CancelDataRepositoryTaskXAmzTargetEnum = field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class CancelDataRepositoryTaskRequest:
    headers: CancelDataRepositoryTaskHeaders = field()
    request: shared.CancelDataRepositoryTaskRequest = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CancelDataRepositoryTaskResponse:
    content_type: str = field()
    status_code: int = field()
    bad_request: Optional[Any] = field(default=None)
    cancel_data_repository_task_response: Optional[shared.CancelDataRepositoryTaskResponse] = field(default=None)
    data_repository_task_ended: Optional[Any] = field(default=None)
    data_repository_task_not_found: Optional[Any] = field(default=None)
    internal_server_error: Optional[Any] = field(default=None)
    unsupported_operation: Optional[Any] = field(default=None)
    
