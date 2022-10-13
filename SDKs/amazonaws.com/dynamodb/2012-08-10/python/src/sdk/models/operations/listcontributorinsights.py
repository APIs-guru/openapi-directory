from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional
from sdk.models import shared


@dataclass
class ListContributorInsightsQueryParams:
    max_results: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'MaxResults', 'style': 'form', 'explode': True }})
    next_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'NextToken', 'style': 'form', 'explode': True }})
    
class ListContributorInsightsXAmzTargetEnum(str, Enum):
    DYNAMO_DB_20120810_LIST_CONTRIBUTOR_INSIGHTS = "DynamoDB_20120810.ListContributorInsights"


@dataclass
class ListContributorInsightsHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    x_amz_target: ListContributorInsightsXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target' }})
    

@dataclass
class ListContributorInsightsRequest:
    query_params: ListContributorInsightsQueryParams = field(default=None)
    headers: ListContributorInsightsHeaders = field(default=None)
    request: shared.ListContributorInsightsInput = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class ListContributorInsightsResponse:
    content_type: str = field(default=None)
    internal_server_error: Optional[Any] = field(default=None)
    list_contributor_insights_output: Optional[shared.ListContributorInsightsOutput] = field(default=None)
    resource_not_found_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
