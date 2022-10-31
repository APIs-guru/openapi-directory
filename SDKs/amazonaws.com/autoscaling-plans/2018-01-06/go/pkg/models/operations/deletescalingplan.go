package operations

import (
"openapi/pkg/models/shared")


type DeleteScalingPlanXAmzTargetEnum string

const (
    DeleteScalingPlanXAmzTargetEnumAnyScaleScalingPlannerFrontendServiceDeleteScalingPlan DeleteScalingPlanXAmzTargetEnum = "AnyScaleScalingPlannerFrontendService.DeleteScalingPlan"
)


type DeleteScalingPlanHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget DeleteScalingPlanXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type DeleteScalingPlanRequest struct {
    Headers DeleteScalingPlanHeaders 
    Request shared.DeleteScalingPlanRequest `request:"mediaType=application/json"`
    
}

type DeleteScalingPlanResponse struct {
    ConcurrentUpdateException *interface{} 
    ContentType string 
    DeleteScalingPlanResponse map[string]interface{} 
    InternalServiceException *interface{} 
    ObjectNotFoundException *interface{} 
    StatusCode int64 
    ValidationException *interface{} 
    
}

