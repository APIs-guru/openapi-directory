from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from sdk.models import shared

class DescribeKeyPhrasesDetectionJobXAmzTargetEnum(str, Enum):
    COMPREHEND_20171127_DESCRIBE_KEY_PHRASES_DETECTION_JOB = "Comprehend_20171127.DescribeKeyPhrasesDetectionJob"


@dataclass
class DescribeKeyPhrasesDetectionJobHeaders:
    x_amz_target: DescribeKeyPhrasesDetectionJobXAmzTargetEnum = field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class DescribeKeyPhrasesDetectionJobRequest:
    headers: DescribeKeyPhrasesDetectionJobHeaders = field()
    request: shared.DescribeKeyPhrasesDetectionJobRequest = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class DescribeKeyPhrasesDetectionJobResponse:
    content_type: str = field()
    status_code: int = field()
    describe_key_phrases_detection_job_response: Optional[shared.DescribeKeyPhrasesDetectionJobResponse] = field(default=None)
    internal_server_exception: Optional[Any] = field(default=None)
    invalid_request_exception: Optional[Any] = field(default=None)
    job_not_found_exception: Optional[Any] = field(default=None)
    too_many_requests_exception: Optional[Any] = field(default=None)
    
