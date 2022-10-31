from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared

class StartIcd10CmInferenceJobXAmzTargetEnum(str, Enum):
    COMPREHEND_MEDICAL_20181030_START_ICD10_CM_INFERENCE_JOB = "ComprehendMedical_20181030.StartICD10CMInferenceJob"


@dataclass
class StartIcd10CmInferenceJobHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    x_amz_target: StartIcd10CmInferenceJobXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    

@dataclass
class StartIcd10CmInferenceJobRequest:
    headers: StartIcd10CmInferenceJobHeaders = field(default=None)
    request: shared.StartIcd10CmInferenceJobRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class StartIcd10CmInferenceJobResponse:
    content_type: str = field(default=None)
    internal_server_exception: Optional[Any] = field(default=None)
    invalid_request_exception: Optional[Any] = field(default=None)
    resource_not_found_exception: Optional[Any] = field(default=None)
    start_icd10_cm_inference_job_response: Optional[shared.StartIcd10CmInferenceJobResponse] = field(default=None)
    status_code: int = field(default=None)
    too_many_requests_exception: Optional[Any] = field(default=None)
    
