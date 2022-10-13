from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional
from sdk.models import shared

class ListCodeReviewsTypeEnum(str, Enum):
    PULL_REQUEST = "PullRequest"
    REPOSITORY_ANALYSIS = "RepositoryAnalysis"


@dataclass
class ListCodeReviewsQueryParams:
    max_results: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'MaxResults', 'style': 'form', 'explode': True }})
    next_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'NextToken', 'style': 'form', 'explode': True }})
    provider_types: Optional[List[shared.ProviderTypeEnum]] = field(default=None, metadata={'query_param': { 'field_name': 'ProviderTypes', 'style': 'form', 'explode': True }})
    repository_names: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'RepositoryNames', 'style': 'form', 'explode': True }})
    states: Optional[List[shared.JobStateEnum]] = field(default=None, metadata={'query_param': { 'field_name': 'States', 'style': 'form', 'explode': True }})
    type: ListCodeReviewsTypeEnum = field(default=None, metadata={'query_param': { 'field_name': 'Type', 'style': 'form', 'explode': True }})
    

@dataclass
class ListCodeReviewsHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    

@dataclass
class ListCodeReviewsRequest:
    query_params: ListCodeReviewsQueryParams = field(default=None)
    headers: ListCodeReviewsHeaders = field(default=None)
    

@dataclass
class ListCodeReviewsResponse:
    access_denied_exception: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    internal_server_exception: Optional[Any] = field(default=None)
    list_code_reviews_response: Optional[shared.ListCodeReviewsResponse] = field(default=None)
    status_code: int = field(default=None)
    throttling_exception: Optional[Any] = field(default=None)
    validation_exception: Optional[Any] = field(default=None)
    
