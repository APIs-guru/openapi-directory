package operations

import (
"openapi/pkg/models/shared")


type DeleteTableVersionXAmzTargetEnum string

const (
    DeleteTableVersionXAmzTargetEnumAwsGlueDeleteTableVersion DeleteTableVersionXAmzTargetEnum = "AWSGlue.DeleteTableVersion"
)


type DeleteTableVersionHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget DeleteTableVersionXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type DeleteTableVersionRequest struct {
    Headers DeleteTableVersionHeaders 
    Request shared.DeleteTableVersionRequest `request:"mediaType=application/json"`
    
}

type DeleteTableVersionResponse struct {
    ContentType string 
    DeleteTableVersionResponse map[string]interface{} 
    EntityNotFoundException *interface{} 
    InternalServiceException *interface{} 
    InvalidInputException *interface{} 
    OperationTimeoutException *interface{} 
    StatusCode int64 
    
}

