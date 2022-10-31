from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared

class StopRxNormInferenceJobXAmzTargetEnum(str, Enum):
    COMPREHEND_MEDICAL_20181030_STOP_RX_NORM_INFERENCE_JOB = "ComprehendMedical_20181030.StopRxNormInferenceJob"


@dataclass
class StopRxNormInferenceJobHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    x_amz_target: StopRxNormInferenceJobXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    

@dataclass
class StopRxNormInferenceJobRequest:
    headers: StopRxNormInferenceJobHeaders = field(default=None)
    request: shared.StopRxNormInferenceJobRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class StopRxNormInferenceJobResponse:
    content_type: str = field(default=None)
    internal_server_exception: Optional[Any] = field(default=None)
    invalid_request_exception: Optional[Any] = field(default=None)
    resource_not_found_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    stop_rx_norm_inference_job_response: Optional[shared.StopRxNormInferenceJobResponse] = field(default=None)
    
