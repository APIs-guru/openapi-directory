package operations

import (
"openapi/pkg/models/shared")


type GetMlTransformXAmzTargetEnum string

const (
    GetMlTransformXAmzTargetEnumAwsGlueGetMlTransform GetMlTransformXAmzTargetEnum = "AWSGlue.GetMLTransform"
)


type GetMlTransformHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget GetMlTransformXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type GetMlTransformRequest struct {
    Headers GetMlTransformHeaders 
    Request shared.GetMlTransformRequest `request:"mediaType=application/json"`
    
}

type GetMlTransformResponse struct {
    ContentType string 
    EntityNotFoundException *interface{} 
    GetMlTransformResponse *shared.GetMlTransformResponse 
    InternalServiceException *interface{} 
    InvalidInputException *interface{} 
    OperationTimeoutException *interface{} 
    StatusCode int64 
    
}

