from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared

class ReportTaskRunnerHeartbeatXAmzTargetEnum(str, Enum):
    DATA_PIPELINE_REPORT_TASK_RUNNER_HEARTBEAT = "DataPipeline.ReportTaskRunnerHeartbeat"


@dataclass
class ReportTaskRunnerHeartbeatHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    x_amz_target: ReportTaskRunnerHeartbeatXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target' }})
    

@dataclass
class ReportTaskRunnerHeartbeatRequest:
    headers: ReportTaskRunnerHeartbeatHeaders = field(default=None)
    request: shared.ReportTaskRunnerHeartbeatInput = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class ReportTaskRunnerHeartbeatResponse:
    content_type: str = field(default=None)
    internal_service_error: Optional[Any] = field(default=None)
    invalid_request_exception: Optional[Any] = field(default=None)
    report_task_runner_heartbeat_output: Optional[shared.ReportTaskRunnerHeartbeatOutput] = field(default=None)
    status_code: int = field(default=None)
    
