from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from sdk.models import shared


@dataclass
class ListDominantLanguageDetectionJobsQueryParams:
    max_results: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'MaxResults', 'style': 'form', 'explode': True }})
    next_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'NextToken', 'style': 'form', 'explode': True }})
    
class ListDominantLanguageDetectionJobsXAmzTargetEnum(str, Enum):
    COMPREHEND_20171127_LIST_DOMINANT_LANGUAGE_DETECTION_JOBS = "Comprehend_20171127.ListDominantLanguageDetectionJobs"


@dataclass
class ListDominantLanguageDetectionJobsHeaders:
    x_amz_target: ListDominantLanguageDetectionJobsXAmzTargetEnum = field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class ListDominantLanguageDetectionJobsRequest:
    headers: ListDominantLanguageDetectionJobsHeaders = field()
    query_params: ListDominantLanguageDetectionJobsQueryParams = field()
    request: shared.ListDominantLanguageDetectionJobsRequest = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class ListDominantLanguageDetectionJobsResponse:
    content_type: str = field()
    status_code: int = field()
    internal_server_exception: Optional[Any] = field(default=None)
    invalid_filter_exception: Optional[Any] = field(default=None)
    invalid_request_exception: Optional[Any] = field(default=None)
    list_dominant_language_detection_jobs_response: Optional[shared.ListDominantLanguageDetectionJobsResponse] = field(default=None)
    too_many_requests_exception: Optional[Any] = field(default=None)
    
