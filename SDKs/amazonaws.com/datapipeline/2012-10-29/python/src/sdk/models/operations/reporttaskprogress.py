from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared

class ReportTaskProgressXAmzTargetEnum(str, Enum):
    DATA_PIPELINE_REPORT_TASK_PROGRESS = "DataPipeline.ReportTaskProgress"


@dataclass
class ReportTaskProgressHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    x_amz_target: ReportTaskProgressXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target' }})
    

@dataclass
class ReportTaskProgressRequest:
    headers: ReportTaskProgressHeaders = field(default=None)
    request: shared.ReportTaskProgressInput = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class ReportTaskProgressResponse:
    content_type: str = field(default=None)
    internal_service_error: Optional[Any] = field(default=None)
    invalid_request_exception: Optional[Any] = field(default=None)
    pipeline_deleted_exception: Optional[Any] = field(default=None)
    pipeline_not_found_exception: Optional[Any] = field(default=None)
    report_task_progress_output: Optional[shared.ReportTaskProgressOutput] = field(default=None)
    status_code: int = field(default=None)
    task_not_found_exception: Optional[Any] = field(default=None)
    
