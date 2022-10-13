from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared

class StopEntitiesDetectionV2JobXAmzTargetEnum(str, Enum):
    COMPREHEND_MEDICAL_20181030_STOP_ENTITIES_DETECTION_V2_JOB = "ComprehendMedical_20181030.StopEntitiesDetectionV2Job"


@dataclass
class StopEntitiesDetectionV2JobHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    x_amz_target: StopEntitiesDetectionV2JobXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target' }})
    

@dataclass
class StopEntitiesDetectionV2JobRequest:
    headers: StopEntitiesDetectionV2JobHeaders = field(default=None)
    request: shared.StopEntitiesDetectionV2JobRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class StopEntitiesDetectionV2JobResponse:
    content_type: str = field(default=None)
    internal_server_exception: Optional[Any] = field(default=None)
    invalid_request_exception: Optional[Any] = field(default=None)
    resource_not_found_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    stop_entities_detection_v2_job_response: Optional[shared.StopEntitiesDetectionV2JobResponse] = field(default=None)
    
