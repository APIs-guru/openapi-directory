package operations

import (
"openapi/pkg/models/shared")


type GetPlanXAmzTargetEnum string

const (
    GetPlanXAmzTargetEnumAwsGlueGetPlan GetPlanXAmzTargetEnum = "AWSGlue.GetPlan"
)


type GetPlanHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget GetPlanXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type GetPlanRequest struct {
    Headers GetPlanHeaders 
    Request shared.GetPlanRequest `request:"mediaType=application/json"`
    
}

type GetPlanResponse struct {
    ContentType string 
    GetPlanResponse *shared.GetPlanResponse 
    InternalServiceException *interface{} 
    InvalidInputException *interface{} 
    OperationTimeoutException *interface{} 
    StatusCode int64 
    
}

