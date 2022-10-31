from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared

class RetryStageExecutionXAmzTargetEnum(str, Enum):
    CODE_PIPELINE_20150709_RETRY_STAGE_EXECUTION = "CodePipeline_20150709.RetryStageExecution"


@dataclass
class RetryStageExecutionHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    x_amz_target: RetryStageExecutionXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    

@dataclass
class RetryStageExecutionRequest:
    headers: RetryStageExecutionHeaders = field(default=None)
    request: shared.RetryStageExecutionInput = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class RetryStageExecutionResponse:
    conflict_exception: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    not_latest_pipeline_execution_exception: Optional[Any] = field(default=None)
    pipeline_not_found_exception: Optional[Any] = field(default=None)
    retry_stage_execution_output: Optional[shared.RetryStageExecutionOutput] = field(default=None)
    stage_not_found_exception: Optional[Any] = field(default=None)
    stage_not_retryable_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    validation_exception: Optional[Any] = field(default=None)
    
