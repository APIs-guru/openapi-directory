from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional
from sdk.models import shared

class ListJobsStatusEnum(str, Enum):
    IN_PROGRESS = "IN_PROGRESS"
    CANCELED = "CANCELED"
    COMPLETED = "COMPLETED"
    DELETION_IN_PROGRESS = "DELETION_IN_PROGRESS"

class ListJobsTargetSelectionEnum(str, Enum):
    CONTINUOUS = "CONTINUOUS"
    SNAPSHOT = "SNAPSHOT"


@dataclass
class ListJobsQueryParams:
    max_results: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'maxResults', 'style': 'form', 'explode': True }})
    namespace_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'namespaceId', 'style': 'form', 'explode': True }})
    next_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'nextToken', 'style': 'form', 'explode': True }})
    status: Optional[ListJobsStatusEnum] = field(default=None, metadata={'query_param': { 'field_name': 'status', 'style': 'form', 'explode': True }})
    target_selection: Optional[ListJobsTargetSelectionEnum] = field(default=None, metadata={'query_param': { 'field_name': 'targetSelection', 'style': 'form', 'explode': True }})
    thing_group_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'thingGroupId', 'style': 'form', 'explode': True }})
    thing_group_name: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'thingGroupName', 'style': 'form', 'explode': True }})
    

@dataclass
class ListJobsHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class ListJobsRequest:
    query_params: ListJobsQueryParams = field(default=None)
    headers: ListJobsHeaders = field(default=None)
    

@dataclass
class ListJobsResponse:
    content_type: str = field(default=None)
    invalid_request_exception: Optional[Any] = field(default=None)
    list_jobs_response: Optional[shared.ListJobsResponse] = field(default=None)
    resource_not_found_exception: Optional[Any] = field(default=None)
    service_unavailable_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    throttling_exception: Optional[Any] = field(default=None)
    
