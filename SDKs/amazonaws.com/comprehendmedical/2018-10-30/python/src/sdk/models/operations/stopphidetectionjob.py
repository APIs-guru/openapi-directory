from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared

class StopPhiDetectionJobXAmzTargetEnum(str, Enum):
    COMPREHEND_MEDICAL_20181030_STOP_PHI_DETECTION_JOB = "ComprehendMedical_20181030.StopPHIDetectionJob"


@dataclass
class StopPhiDetectionJobHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    x_amz_target: StopPhiDetectionJobXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target' }})
    

@dataclass
class StopPhiDetectionJobRequest:
    headers: StopPhiDetectionJobHeaders = field(default=None)
    request: shared.StopPhiDetectionJobRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class StopPhiDetectionJobResponse:
    content_type: str = field(default=None)
    internal_server_exception: Optional[Any] = field(default=None)
    invalid_request_exception: Optional[Any] = field(default=None)
    resource_not_found_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    stop_phi_detection_job_response: Optional[shared.StopPhiDetectionJobResponse] = field(default=None)
    
