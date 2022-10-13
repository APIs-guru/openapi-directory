from dataclasses import dataclass, field
from typing import Enum,List,Optional

class GetListJobsActionEnum(str, Enum):
    LIST_JOBS = "ListJobs"

class GetListJobsOperationEnum(str, Enum):
    LIST_JOBS = "ListJobs"

class GetListJobsVersionEnum(str, Enum):
    TWO_THOUSAND_AND_TEN_06_01 = "2010-06-01"


@dataclass
class GetListJobsQueryParams:
    api_version: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'APIVersion', 'style': 'form', 'explode': True }})
    aws_access_key_id: str = field(default=None, metadata={'query_param': { 'field_name': 'AWSAccessKeyId', 'style': 'form', 'explode': True }})
    action: GetListJobsActionEnum = field(default=None, metadata={'query_param': { 'field_name': 'Action', 'style': 'form', 'explode': True }})
    marker: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'Marker', 'style': 'form', 'explode': True }})
    max_jobs: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'MaxJobs', 'style': 'form', 'explode': True }})
    operation: GetListJobsOperationEnum = field(default=None, metadata={'query_param': { 'field_name': 'Operation', 'style': 'form', 'explode': True }})
    signature: str = field(default=None, metadata={'query_param': { 'field_name': 'Signature', 'style': 'form', 'explode': True }})
    signature_method: str = field(default=None, metadata={'query_param': { 'field_name': 'SignatureMethod', 'style': 'form', 'explode': True }})
    signature_version: str = field(default=None, metadata={'query_param': { 'field_name': 'SignatureVersion', 'style': 'form', 'explode': True }})
    timestamp: str = field(default=None, metadata={'query_param': { 'field_name': 'Timestamp', 'style': 'form', 'explode': True }})
    version: GetListJobsVersionEnum = field(default=None, metadata={'query_param': { 'field_name': 'Version', 'style': 'form', 'explode': True }})
    

@dataclass
class GetListJobsRequest:
    query_params: GetListJobsQueryParams = field(default=None)
    

@dataclass
class GetListJobsResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
