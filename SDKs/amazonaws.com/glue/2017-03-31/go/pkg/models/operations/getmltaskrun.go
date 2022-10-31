package operations

import (
"openapi/pkg/models/shared")


type GetMlTaskRunXAmzTargetEnum string

const (
    GetMlTaskRunXAmzTargetEnumAwsGlueGetMlTaskRun GetMlTaskRunXAmzTargetEnum = "AWSGlue.GetMLTaskRun"
)


type GetMlTaskRunHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget GetMlTaskRunXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type GetMlTaskRunRequest struct {
    Headers GetMlTaskRunHeaders 
    Request shared.GetMlTaskRunRequest `request:"mediaType=application/json"`
    
}

type GetMlTaskRunResponse struct {
    ContentType string 
    EntityNotFoundException *interface{} 
    GetMlTaskRunResponse *shared.GetMlTaskRunResponse 
    InternalServiceException *interface{} 
    InvalidInputException *interface{} 
    OperationTimeoutException *interface{} 
    StatusCode int64 
    
}

