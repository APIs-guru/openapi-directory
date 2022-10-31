package operations

import (
"openapi/pkg/models/shared")


type DeleteTaskXAmzTargetEnum string

const (
    DeleteTaskXAmzTargetEnumFmrsServiceDeleteTask DeleteTaskXAmzTargetEnum = "FmrsService.DeleteTask"
)


type DeleteTaskHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget DeleteTaskXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type DeleteTaskRequest struct {
    Headers DeleteTaskHeaders 
    Request shared.DeleteTaskRequest `request:"mediaType=application/json"`
    
}

type DeleteTaskResponse struct {
    ContentType string 
    DeleteTaskResponse map[string]interface{} 
    InternalException *interface{} 
    InvalidRequestException *interface{} 
    StatusCode int64 
    
}

