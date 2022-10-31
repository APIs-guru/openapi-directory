from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared

class StartTopicsDetectionJobXAmzTargetEnum(str, Enum):
    COMPREHEND_20171127_START_TOPICS_DETECTION_JOB = "Comprehend_20171127.StartTopicsDetectionJob"


@dataclass
class StartTopicsDetectionJobHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    x_amz_target: StartTopicsDetectionJobXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    

@dataclass
class StartTopicsDetectionJobRequest:
    headers: StartTopicsDetectionJobHeaders = field(default=None)
    request: shared.StartTopicsDetectionJobRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class StartTopicsDetectionJobResponse:
    content_type: str = field(default=None)
    internal_server_exception: Optional[Any] = field(default=None)
    invalid_request_exception: Optional[Any] = field(default=None)
    kms_key_validation_exception: Optional[Any] = field(default=None)
    start_topics_detection_job_response: Optional[shared.StartTopicsDetectionJobResponse] = field(default=None)
    status_code: int = field(default=None)
    too_many_requests_exception: Optional[Any] = field(default=None)
    too_many_tags_exception: Optional[Any] = field(default=None)
    
