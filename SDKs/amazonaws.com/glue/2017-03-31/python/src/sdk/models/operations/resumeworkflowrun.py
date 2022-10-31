from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared

class ResumeWorkflowRunXAmzTargetEnum(str, Enum):
    AWS_GLUE_RESUME_WORKFLOW_RUN = "AWSGlue.ResumeWorkflowRun"


@dataclass
class ResumeWorkflowRunHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    x_amz_target: ResumeWorkflowRunXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    

@dataclass
class ResumeWorkflowRunRequest:
    headers: ResumeWorkflowRunHeaders = field(default=None)
    request: shared.ResumeWorkflowRunRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class ResumeWorkflowRunResponse:
    concurrent_runs_exceeded_exception: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    entity_not_found_exception: Optional[Any] = field(default=None)
    illegal_workflow_state_exception: Optional[Any] = field(default=None)
    internal_service_exception: Optional[Any] = field(default=None)
    invalid_input_exception: Optional[Any] = field(default=None)
    operation_timeout_exception: Optional[Any] = field(default=None)
    resume_workflow_run_response: Optional[shared.ResumeWorkflowRunResponse] = field(default=None)
    status_code: int = field(default=None)
    
