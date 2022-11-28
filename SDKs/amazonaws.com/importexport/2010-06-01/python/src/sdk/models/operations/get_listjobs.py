from dataclasses import dataclass, field
from typing import Optional
from enum import Enum

class GetListJobsActionEnum(str, Enum):
    LIST_JOBS = "ListJobs"

class GetListJobsOperationEnum(str, Enum):
    LIST_JOBS = "ListJobs"

class GetListJobsVersionEnum(str, Enum):
    TWO_THOUSAND_AND_TEN_06_01 = "2010-06-01"


@dataclass
class GetListJobsQueryParams:
    aws_access_key_id: str = field(metadata={'query_param': { 'field_name': 'AWSAccessKeyId', 'style': 'form', 'explode': True }})
    action: GetListJobsActionEnum = field(metadata={'query_param': { 'field_name': 'Action', 'style': 'form', 'explode': True }})
    operation: GetListJobsOperationEnum = field(metadata={'query_param': { 'field_name': 'Operation', 'style': 'form', 'explode': True }})
    signature: str = field(metadata={'query_param': { 'field_name': 'Signature', 'style': 'form', 'explode': True }})
    signature_method: str = field(metadata={'query_param': { 'field_name': 'SignatureMethod', 'style': 'form', 'explode': True }})
    signature_version: str = field(metadata={'query_param': { 'field_name': 'SignatureVersion', 'style': 'form', 'explode': True }})
    timestamp: str = field(metadata={'query_param': { 'field_name': 'Timestamp', 'style': 'form', 'explode': True }})
    version: GetListJobsVersionEnum = field(metadata={'query_param': { 'field_name': 'Version', 'style': 'form', 'explode': True }})
    api_version: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'APIVersion', 'style': 'form', 'explode': True }})
    marker: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'Marker', 'style': 'form', 'explode': True }})
    max_jobs: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'MaxJobs', 'style': 'form', 'explode': True }})
    

@dataclass
class GetListJobsRequest:
    query_params: GetListJobsQueryParams = field()
    

@dataclass
class GetListJobsResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
