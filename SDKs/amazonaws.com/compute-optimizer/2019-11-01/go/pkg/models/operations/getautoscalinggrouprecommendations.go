package operations

import (
"openapi/pkg/models/shared")


type GetAutoScalingGroupRecommendationsXAmzTargetEnum string

const (
    GetAutoScalingGroupRecommendationsXAmzTargetEnumComputeOptimizerServiceGetAutoScalingGroupRecommendations GetAutoScalingGroupRecommendationsXAmzTargetEnum = "ComputeOptimizerService.GetAutoScalingGroupRecommendations"
)


type GetAutoScalingGroupRecommendationsHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget GetAutoScalingGroupRecommendationsXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type GetAutoScalingGroupRecommendationsRequest struct {
    Headers GetAutoScalingGroupRecommendationsHeaders 
    Request shared.GetAutoScalingGroupRecommendationsRequest `request:"mediaType=application/json"`
    
}

type GetAutoScalingGroupRecommendationsResponse struct {
    AccessDeniedException *interface{} 
    ContentType string 
    GetAutoScalingGroupRecommendationsResponse *shared.GetAutoScalingGroupRecommendationsResponse 
    InternalServerException *interface{} 
    InvalidParameterValueException *interface{} 
    MissingAuthenticationToken *interface{} 
    OptInRequiredException *interface{} 
    ResourceNotFoundException *interface{} 
    ServiceUnavailableException *interface{} 
    StatusCode int64 
    ThrottlingException *interface{} 
    
}

