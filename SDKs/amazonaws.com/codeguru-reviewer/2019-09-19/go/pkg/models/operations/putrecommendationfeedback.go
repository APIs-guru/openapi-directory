package operations

import (
"openapi/pkg/models/shared")

type PutRecommendationFeedbackHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type PutRecommendationFeedbackRequestBody struct {
    CodeReviewArn string `json:"CodeReviewArn"`
    Reactions []shared.ReactionEnum `json:"Reactions"`
    RecommendationID string `json:"RecommendationId"`
    
}

type PutRecommendationFeedbackRequest struct {
    Headers PutRecommendationFeedbackHeaders 
    Request PutRecommendationFeedbackRequestBody `request:"mediaType=application/json"`
    
}

type PutRecommendationFeedbackResponse struct {
    AccessDeniedException *interface{} 
    ContentType string 
    InternalServerException *interface{} 
    PutRecommendationFeedbackResponse map[string]interface{} 
    ResourceNotFoundException *interface{} 
    StatusCode int64 
    ThrottlingException *interface{} 
    ValidationException *interface{} 
    
}

