from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from sdk.models import shared

class ListPiiEntitiesDetectionJobsXAmzTargetEnum(str, Enum):
    COMPREHEND_20171127_LIST_PII_ENTITIES_DETECTION_JOBS = "Comprehend_20171127.ListPiiEntitiesDetectionJobs"


@dataclass
class ListPiiEntitiesDetectionJobsHeaders:
    x_amz_target: ListPiiEntitiesDetectionJobsXAmzTargetEnum = field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class ListPiiEntitiesDetectionJobsRequest:
    headers: ListPiiEntitiesDetectionJobsHeaders = field()
    request: shared.ListPiiEntitiesDetectionJobsRequest = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class ListPiiEntitiesDetectionJobsResponse:
    content_type: str = field()
    status_code: int = field()
    internal_server_exception: Optional[Any] = field(default=None)
    invalid_filter_exception: Optional[Any] = field(default=None)
    invalid_request_exception: Optional[Any] = field(default=None)
    list_pii_entities_detection_jobs_response: Optional[shared.ListPiiEntitiesDetectionJobsResponse] = field(default=None)
    too_many_requests_exception: Optional[Any] = field(default=None)
    
