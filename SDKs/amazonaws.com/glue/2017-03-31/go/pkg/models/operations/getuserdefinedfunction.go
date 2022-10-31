package operations

import (
"openapi/pkg/models/shared")


type GetUserDefinedFunctionXAmzTargetEnum string

const (
    GetUserDefinedFunctionXAmzTargetEnumAwsGlueGetUserDefinedFunction GetUserDefinedFunctionXAmzTargetEnum = "AWSGlue.GetUserDefinedFunction"
)


type GetUserDefinedFunctionHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget GetUserDefinedFunctionXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type GetUserDefinedFunctionRequest struct {
    Headers GetUserDefinedFunctionHeaders 
    Request shared.GetUserDefinedFunctionRequest `request:"mediaType=application/json"`
    
}

type GetUserDefinedFunctionResponse struct {
    ContentType string 
    EntityNotFoundException *interface{} 
    GetUserDefinedFunctionResponse *shared.GetUserDefinedFunctionResponse 
    GlueEncryptionException *interface{} 
    InternalServiceException *interface{} 
    InvalidInputException *interface{} 
    OperationTimeoutException *interface{} 
    StatusCode int64 
    
}

