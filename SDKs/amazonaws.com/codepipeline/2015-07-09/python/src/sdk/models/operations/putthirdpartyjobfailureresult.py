from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared

class PutThirdPartyJobFailureResultXAmzTargetEnum(str, Enum):
    CODE_PIPELINE_20150709_PUT_THIRD_PARTY_JOB_FAILURE_RESULT = "CodePipeline_20150709.PutThirdPartyJobFailureResult"


@dataclass
class PutThirdPartyJobFailureResultHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    x_amz_target: PutThirdPartyJobFailureResultXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    

@dataclass
class PutThirdPartyJobFailureResultRequest:
    headers: PutThirdPartyJobFailureResultHeaders = field(default=None)
    request: shared.PutThirdPartyJobFailureResultInput = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PutThirdPartyJobFailureResultResponse:
    content_type: str = field(default=None)
    invalid_client_token_exception: Optional[Any] = field(default=None)
    invalid_job_state_exception: Optional[Any] = field(default=None)
    job_not_found_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    validation_exception: Optional[Any] = field(default=None)
    
