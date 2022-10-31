package operations

import (
"openapi/pkg/models/shared")

type ListRecommendationFeedbackPathParams struct {
    CodeReviewArn string `pathParam:"style=simple,explode=false,name=CodeReviewArn"`
    
}

type ListRecommendationFeedbackQueryParams struct {
    MaxResults *int64 `queryParam:"style=form,explode=true,name=MaxResults"`
    NextToken *string `queryParam:"style=form,explode=true,name=NextToken"`
    RecommendationIds []string `queryParam:"style=form,explode=true,name=RecommendationIds"`
    UserIds []string `queryParam:"style=form,explode=true,name=UserIds"`
    
}

type ListRecommendationFeedbackHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type ListRecommendationFeedbackRequest struct {
    PathParams ListRecommendationFeedbackPathParams 
    QueryParams ListRecommendationFeedbackQueryParams 
    Headers ListRecommendationFeedbackHeaders 
    
}

type ListRecommendationFeedbackResponse struct {
    AccessDeniedException *interface{} 
    ContentType string 
    InternalServerException *interface{} 
    ListRecommendationFeedbackResponse *shared.ListRecommendationFeedbackResponse 
    ResourceNotFoundException *interface{} 
    StatusCode int64 
    ThrottlingException *interface{} 
    ValidationException *interface{} 
    
}

