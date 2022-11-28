from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from sdk.models import shared

class ReportTaskProgressXAmzTargetEnum(str, Enum):
    DATA_PIPELINE_REPORT_TASK_PROGRESS = "DataPipeline.ReportTaskProgress"


@dataclass
class ReportTaskProgressHeaders:
    x_amz_target: ReportTaskProgressXAmzTargetEnum = field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class ReportTaskProgressRequest:
    headers: ReportTaskProgressHeaders = field()
    request: shared.ReportTaskProgressInput = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class ReportTaskProgressResponse:
    content_type: str = field()
    status_code: int = field()
    internal_service_error: Optional[Any] = field(default=None)
    invalid_request_exception: Optional[Any] = field(default=None)
    pipeline_deleted_exception: Optional[Any] = field(default=None)
    pipeline_not_found_exception: Optional[Any] = field(default=None)
    report_task_progress_output: Optional[shared.ReportTaskProgressOutput] = field(default=None)
    task_not_found_exception: Optional[Any] = field(default=None)
    
