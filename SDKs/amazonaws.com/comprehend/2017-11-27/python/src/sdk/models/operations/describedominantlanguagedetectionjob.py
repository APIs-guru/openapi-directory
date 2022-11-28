from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from sdk.models import shared

class DescribeDominantLanguageDetectionJobXAmzTargetEnum(str, Enum):
    COMPREHEND_20171127_DESCRIBE_DOMINANT_LANGUAGE_DETECTION_JOB = "Comprehend_20171127.DescribeDominantLanguageDetectionJob"


@dataclass
class DescribeDominantLanguageDetectionJobHeaders:
    x_amz_target: DescribeDominantLanguageDetectionJobXAmzTargetEnum = field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class DescribeDominantLanguageDetectionJobRequest:
    headers: DescribeDominantLanguageDetectionJobHeaders = field()
    request: shared.DescribeDominantLanguageDetectionJobRequest = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class DescribeDominantLanguageDetectionJobResponse:
    content_type: str = field()
    status_code: int = field()
    describe_dominant_language_detection_job_response: Optional[shared.DescribeDominantLanguageDetectionJobResponse] = field(default=None)
    internal_server_exception: Optional[Any] = field(default=None)
    invalid_request_exception: Optional[Any] = field(default=None)
    job_not_found_exception: Optional[Any] = field(default=None)
    too_many_requests_exception: Optional[Any] = field(default=None)
    
