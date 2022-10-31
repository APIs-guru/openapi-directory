package operations

import (
"openapi/pkg/models/shared")


type GetTableVersionXAmzTargetEnum string

const (
    GetTableVersionXAmzTargetEnumAwsGlueGetTableVersion GetTableVersionXAmzTargetEnum = "AWSGlue.GetTableVersion"
)


type GetTableVersionHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget GetTableVersionXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type GetTableVersionRequest struct {
    Headers GetTableVersionHeaders 
    Request shared.GetTableVersionRequest `request:"mediaType=application/json"`
    
}

type GetTableVersionResponse struct {
    ContentType string 
    EntityNotFoundException *interface{} 
    GetTableVersionResponse *shared.GetTableVersionResponse 
    GlueEncryptionException *interface{} 
    InternalServiceException *interface{} 
    InvalidInputException *interface{} 
    OperationTimeoutException *interface{} 
    StatusCode int64 
    
}

