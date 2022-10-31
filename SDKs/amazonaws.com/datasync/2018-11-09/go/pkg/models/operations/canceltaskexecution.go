package operations

import (
"openapi/pkg/models/shared")


type CancelTaskExecutionXAmzTargetEnum string

const (
    CancelTaskExecutionXAmzTargetEnumFmrsServiceCancelTaskExecution CancelTaskExecutionXAmzTargetEnum = "FmrsService.CancelTaskExecution"
)


type CancelTaskExecutionHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget CancelTaskExecutionXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type CancelTaskExecutionRequest struct {
    Headers CancelTaskExecutionHeaders 
    Request shared.CancelTaskExecutionRequest `request:"mediaType=application/json"`
    
}

type CancelTaskExecutionResponse struct {
    CancelTaskExecutionResponse map[string]interface{} 
    ContentType string 
    InternalException *interface{} 
    InvalidRequestException *interface{} 
    StatusCode int64 
    
}

