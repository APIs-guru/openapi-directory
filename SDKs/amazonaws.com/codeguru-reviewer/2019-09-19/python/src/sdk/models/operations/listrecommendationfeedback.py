from dataclasses import dataclass, field
from typing import Any,List,Optional
from sdk.models import shared


@dataclass
class ListRecommendationFeedbackPathParams:
    code_review_arn: str = field(default=None, metadata={'path_param': { 'field_name': 'CodeReviewArn', 'style': 'simple', 'explode': False }})
    

@dataclass
class ListRecommendationFeedbackQueryParams:
    max_results: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'MaxResults', 'style': 'form', 'explode': True }})
    next_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'NextToken', 'style': 'form', 'explode': True }})
    recommendation_ids: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'RecommendationIds', 'style': 'form', 'explode': True }})
    user_ids: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'UserIds', 'style': 'form', 'explode': True }})
    

@dataclass
class ListRecommendationFeedbackHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    

@dataclass
class ListRecommendationFeedbackRequest:
    path_params: ListRecommendationFeedbackPathParams = field(default=None)
    query_params: ListRecommendationFeedbackQueryParams = field(default=None)
    headers: ListRecommendationFeedbackHeaders = field(default=None)
    

@dataclass
class ListRecommendationFeedbackResponse:
    access_denied_exception: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    internal_server_exception: Optional[Any] = field(default=None)
    list_recommendation_feedback_response: Optional[shared.ListRecommendationFeedbackResponse] = field(default=None)
    resource_not_found_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    throttling_exception: Optional[Any] = field(default=None)
    validation_exception: Optional[Any] = field(default=None)
    
