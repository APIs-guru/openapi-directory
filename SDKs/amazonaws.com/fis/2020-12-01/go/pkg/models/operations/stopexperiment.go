package operations

import (
"openapi/pkg/models/shared")

type StopExperimentPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    
}

type StopExperimentHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type StopExperimentRequest struct {
    PathParams StopExperimentPathParams 
    Headers StopExperimentHeaders 
    
}

type StopExperimentResponse struct {
    ContentType string 
    ResourceNotFoundException *interface{} 
    StatusCode int64 
    StopExperimentResponse *shared.StopExperimentResponse 
    ValidationException *interface{} 
    
}

