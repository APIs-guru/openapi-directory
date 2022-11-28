from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from sdk.models import shared


@dataclass
class DescribeRecommendationFeedbackPathParams:
    code_review_arn: str = field(metadata={'path_param': { 'field_name': 'CodeReviewArn', 'style': 'simple', 'explode': False }})
    

@dataclass
class DescribeRecommendationFeedbackQueryParams:
    recommendation_id: str = field(metadata={'query_param': { 'field_name': 'RecommendationId', 'style': 'form', 'explode': True }})
    user_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'UserId', 'style': 'form', 'explode': True }})
    

@dataclass
class DescribeRecommendationFeedbackHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class DescribeRecommendationFeedbackRequest:
    headers: DescribeRecommendationFeedbackHeaders = field()
    path_params: DescribeRecommendationFeedbackPathParams = field()
    query_params: DescribeRecommendationFeedbackQueryParams = field()
    

@dataclass
class DescribeRecommendationFeedbackResponse:
    content_type: str = field()
    status_code: int = field()
    access_denied_exception: Optional[Any] = field(default=None)
    describe_recommendation_feedback_response: Optional[shared.DescribeRecommendationFeedbackResponse] = field(default=None)
    internal_server_exception: Optional[Any] = field(default=None)
    resource_not_found_exception: Optional[Any] = field(default=None)
    throttling_exception: Optional[Any] = field(default=None)
    validation_exception: Optional[Any] = field(default=None)
    
