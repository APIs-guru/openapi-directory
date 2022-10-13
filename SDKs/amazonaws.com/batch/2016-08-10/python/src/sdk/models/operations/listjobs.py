from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class ListJobsQueryParams:
    max_results: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'maxResults', 'style': 'form', 'explode': True }})
    next_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'nextToken', 'style': 'form', 'explode': True }})
    

@dataclass
class ListJobsHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    
class ListJobsRequestBodyJobStatusEnum(str, Enum):
    SUBMITTED = "SUBMITTED"
    PENDING = "PENDING"
    RUNNABLE = "RUNNABLE"
    STARTING = "STARTING"
    RUNNING = "RUNNING"
    SUCCEEDED = "SUCCEEDED"
    FAILED = "FAILED"


@dataclass_json
@dataclass
class ListJobsRequestBody:
    array_job_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'arrayJobId' }})
    filters: Optional[List[shared.KeyValuesPair]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'filters' }})
    job_queue: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'jobQueue' }})
    job_status: Optional[ListJobsRequestBodyJobStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'jobStatus' }})
    max_results: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maxResults' }})
    multi_node_job_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'multiNodeJobId' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextToken' }})
    

@dataclass
class ListJobsRequest:
    query_params: ListJobsQueryParams = field(default=None)
    headers: ListJobsHeaders = field(default=None)
    request: ListJobsRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class ListJobsResponse:
    client_exception: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    list_jobs_response: Optional[shared.ListJobsResponse] = field(default=None)
    server_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
