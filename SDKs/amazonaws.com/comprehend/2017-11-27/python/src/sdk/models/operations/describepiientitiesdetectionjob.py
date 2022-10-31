from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared

class DescribePiiEntitiesDetectionJobXAmzTargetEnum(str, Enum):
    COMPREHEND_20171127_DESCRIBE_PII_ENTITIES_DETECTION_JOB = "Comprehend_20171127.DescribePiiEntitiesDetectionJob"


@dataclass
class DescribePiiEntitiesDetectionJobHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    x_amz_target: DescribePiiEntitiesDetectionJobXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    

@dataclass
class DescribePiiEntitiesDetectionJobRequest:
    headers: DescribePiiEntitiesDetectionJobHeaders = field(default=None)
    request: shared.DescribePiiEntitiesDetectionJobRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class DescribePiiEntitiesDetectionJobResponse:
    content_type: str = field(default=None)
    describe_pii_entities_detection_job_response: Optional[shared.DescribePiiEntitiesDetectionJobResponse] = field(default=None)
    internal_server_exception: Optional[Any] = field(default=None)
    invalid_request_exception: Optional[Any] = field(default=None)
    job_not_found_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    too_many_requests_exception: Optional[Any] = field(default=None)
    
