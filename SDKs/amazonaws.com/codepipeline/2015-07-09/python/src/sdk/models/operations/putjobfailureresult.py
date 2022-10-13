from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared

class PutJobFailureResultXAmzTargetEnum(str, Enum):
    CODE_PIPELINE_20150709_PUT_JOB_FAILURE_RESULT = "CodePipeline_20150709.PutJobFailureResult"


@dataclass
class PutJobFailureResultHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    x_amz_target: PutJobFailureResultXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target' }})
    

@dataclass
class PutJobFailureResultRequest:
    headers: PutJobFailureResultHeaders = field(default=None)
    request: shared.PutJobFailureResultInput = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PutJobFailureResultResponse:
    content_type: str = field(default=None)
    invalid_job_state_exception: Optional[Any] = field(default=None)
    job_not_found_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    validation_exception: Optional[Any] = field(default=None)
    
